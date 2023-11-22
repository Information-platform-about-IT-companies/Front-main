import { API_HOST, API_ENDPOINTS, ROUTES } from "services/constants";
import { HTTPError } from "api/http/error";
import { getCookie } from "services/getCookie";
import { tokensAPI } from "api/tokensAPI";

const API_METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
};

export class HTTP {
  http = fetch;

  static setTokens({ access, refresh }) {
    console.log("tokens", access, refresh);
    HTTP.accessToken = access;
    HTTP.refreshToken = refresh;
    console.log("HTTP tokens", HTTP.accessToken, HTTP.refreshToken);
  }

  static get accessToken() {
    return getCookie("access_token");
  }

  static set accessToken(value) {
    document.cookie = `access_token=${value}; path=/;`;
  }

  static get refreshToken() {
    return getCookie("refresh_token");
  }

  static set refreshToken(value) {
    document.cookie = `refresh_token=${value}; path=/;`;
  }

  static async updateTokens() {
    const tokens = await tokensAPI.refreshToken({ refresh: HTTP.refreshToken });
    HTTP.setTokens(tokens);
  }

  static get(path, options) {
    return this.#request(path, { ...options, method: API_METHOD.GET });
  }

  static post(path, options) {
    return this.#request(path, { ...options, method: API_METHOD.POST });
  }

  static put(path, options) {
    return this.#request(path, { ...options, method: API_METHOD.PUT });
  }

  static patch(path, options) {
    return this.#request(path, { ...options, method: API_METHOD.PATCH });
  }

  static delete(path, options) {
    return this.#request(path, { ...options, method: API_METHOD.DELETE });
  }

  static async #request(path, { method, headers, url, ...rest }, isRetry = false) {
    const baseURL = url ?? new URL(path, API_HOST);
    const options = {
      headers: { "Content-Type": "application/json", ...headers },
      method,
      ...rest,
    };
    let response = await fetch(baseURL, options);

    if (response.ok) {
      return response.status === 204 ? false : response.json();
    }

    if (response.status === 401) {
      if (path === API_ENDPOINTS.TOKENS.REFRESH || isRetry) {
        window.location = ROUTES.SIGN_IN;
        return false;
      }
      await HTTP.updateTokens();
      response = await HTTP.#request(
        path,
        { ...options, headers: { ...headers, Authorization: `Bearer ${HTTP.accessToken}` } },
        true,
      );
    }
    const errorData = await response.json();
    throw new HTTPError(response, errorData);
  }
}
