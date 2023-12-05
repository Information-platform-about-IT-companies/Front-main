import { API_ERRORS } from "services/constants";

const errorsMap = new Map([
  ["User is inactive.", API_ERRORS.USER_IS_INACTIVE],
  ["User is active", API_ERRORS.USER_IS_INACTIVE],
  ["The 'name' query parameter must contain at least three characters.", API_ERRORS.MIN_3_LENGTH],
  ["user with this Почта already exists.", API_ERRORS.EMAIL_EXISTS],
  ["Authentication credentials were not provided.", API_ERRORS.NO_CREDENTIALS],
  ["Failed to fetch", ""],
]);

// 401 error перенаправить на стр логина
export class HTTPError extends Error {
  constructor(response, data) {
    const value = Object.values(data)[0];
    const extractedValue = Array.isArray(value) ? value[0] : value;
    const message = errorsMap.has(extractedValue) ? errorsMap.get(extractedValue) : extractedValue;

    super(message);

    this.name = "HTTPError";
    this.status = response.status;
    this.statusText = response.statusText;
    this.data = data;
  }
}
