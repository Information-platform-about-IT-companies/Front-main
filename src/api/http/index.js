import { API_HOST } from "services/constants";

const proxyCorsUrl = "https://api.allorigins.win/raw?url=";

const API_METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
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
    try {
      const response = await fetch(baseURL, {
        headers,
        method,
        withCredentials,
        ...rest,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
