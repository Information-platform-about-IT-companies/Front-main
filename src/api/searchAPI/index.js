class SearchApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  // eslint-disable-next-line class-methods-use-this
  checkResponse(result) {
    return result.ok ? result.json() : Promise.reject(result);
  }

  async request(endpoint, options) {
    const result = await fetch(`${this.baseUrl}${endpoint}`, options);
    return this.checkResponse(result);
  }

  getSearchCities(query) {
    return this.request(`/cities/?name=${query.toLowerCase()}`, {
      // credentials: "include",
      headers: this.headers,
    });
  }

  getSearchServicesAndCompaneis(query) {
    return this.request(`/search_services_companies/?name=${query.toLowerCase()}`, {
      headers: this.headers,
    });
  }
}

const searchApi = new SearchApi({
  baseUrl: "https://dev.octopus-it.ru/api/v1/info",
  headers: {
    "Content-Type": "application/json",
  },
});

export default searchApi;
