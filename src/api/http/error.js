export class HTTPError extends Error {
  constructor(response, data) {
    let message;

    switch (response.status) {
      case 400:
        message = `Validation Error: ${response.statusText}`;
        break;
      default:
        message = `HTTP Error: ${data.detail}`;
    }

    super(message);

    this.name = "HTTPError";
    this.status = response.status;
    this.statusText = response.statusText;
    this.data = data;
  }
}
