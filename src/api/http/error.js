const errorsMap = new Map([
  ["User is inactive.", "Пользователь не подтвердил регистрацию на почте"],
  [
    "The 'name' query parameter must contain at least three characters.",
    "Поле должно содержать хотя бы 3 символа",
  ],
  ["user with this Почта already exists.", "Пользователь с такой почтой уже зарегестрирован"],
  ["Authentication credentials were not provided.", "Данные аутентификации не были предоставлены"],
]);

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
