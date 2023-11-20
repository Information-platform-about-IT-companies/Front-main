import { API_HOST } from "services/constants";
import { HTTPError } from "api/http/error";

const proxyCorsUrl = "https://api.allorigins.win/raw?url=";

const API_METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
};

export class HTTP {
  http = fetch;

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

  static async #request(
    path,
    {
      method,
      headers = { "Content-Type": "application/json" },
      url,
      withCredentials = true,
      ...rest
    },
  ) {
    const baseURL = url ?? new URL(path, API_HOST);

    const response = await fetch(baseURL, {
      headers,
      method,
      withCredentials,
      ...rest,
    });

    if (response.status === 204) {
      return false;
    }
    if (response.ok) {
      return response.json();
    }
    const errorData = await response.json();
    throw new HTTPError(response, errorData);
  }
}
