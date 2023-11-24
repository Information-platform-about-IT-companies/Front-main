import { API_ENDPOINTS } from "services/constants";
import { transform } from "services/transform";
import { HTTP } from "api/http";

/**
 * @typedef {Object} HTTPError
 * @property {string} message - Сообщение об ошибке.
 * @property {number} status - Код статуса HTTP ошибки.
 * @property {string} statusText - Текстовое описание статуса HTTP ошибки.
 * @property {Object} data - Дополнительные данные, связанные с ошибкой.
 *   @property {string} [detail] - (401,403) Информация об ошибке, например, "User is inactive".
 *   @property {Object.<string, string[]>} [fieldErrors] - (400) Объект с ошибками полей, например, {"field_name": ["<field_error>"]}.
 */

/**
 *
 * Отправляет данные регистрации на сервер.
 *
 * @param {FormData} formData - Экземпляр FormData с данными для регистрации.
 *   @property {string} userName - Имя пользователя.
 *   @property {string} userSurname - Фамилия пользователя.
 *   @property {string} email - Адрес электронной почты пользователя.
 *   @property {string} password - Пароль пользователя.
 *   @property {string} repeatPassword - Повторение пароля пользователя.
 *
 * @returns {Promise<void>>}  - Объект Promise, с данными ответа от сервера.
 * @throws {HTTPError} - В случае ошибки при выполнении запроса.
 *
 */

export const signup = async (formData) =>
  HTTP.post(API_ENDPOINTS.AUTH.SIGNUP, {
    body: JSON.stringify(transform.signupFormData(formData)),
  });

/**
 *
 * Отправляет данные регистрации на сервер.
 *
 * @param {FormData} formData - Экземпляр FormData с данными для подтверждения регистрации.
 *   @property {string} uid - Уникальный идентификатор пользователя.
 *   @property {string} token - Токен подтверждения регистрации.
 *
 * @returns {Promise<void>}  - Объект Promise, с данными ответа от сервера.
 * @throws {HTTPError} - (400) В случае ошибки при выполнении запроса.
 *
 */

export const confirmSignup = (formData) =>
  HTTP.post(API_ENDPOINTS.AUTH.SIGNUP_CONFIRM, { body: JSON.stringify(formData) });

/**
 *
 * Авторизует пользователя на сервере.
 *
 * @param {Object} formData - Объект с данными для авторизации.
 *   @property {string} email - Адрес электронной почты пользователя.
 *   @property {string} password - Пароль пользователя..
 *
 * @returns {Promise<Object>} - Объект Promise, разрешаемый данными аутентификации.
 *   @property {string} access - Токен доступа.
 *   @property {string} refresh - Токен обновления.
 * @throws {HTTPError} - (400, 403) В случае ошибки при выполнении запроса.
 *
 */

export const signin = async (formData) =>
  HTTP.post(API_ENDPOINTS.AUTH.SIGNIN, { body: JSON.stringify(formData) });

/**
 *
 * Отправляет запрос на сброс пароля.
 *
 * @param {Object} formData - Объект с данными для запроса сброса пароля.
 *   @property {string} email - Адрес электронной почты пользователя.
 *
 * @returns {Promise<void>}  - Объект Promise, с данными ответа от сервера.
 * @throws {HTTPError} - (400, 403) В случае ошибки при выполнении запроса.
 *
 */

export const resetPassword = async (formData) =>
  HTTP.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, { body: JSON.stringify(formData) });

/**
 *
 * Подтверждает сброс пароля .
 *
 * @param {Object} formData - Объект с данными для подтверждения сброса пароля.
 *   @property {string} uid - Уникальный идентификатор пользователя.
 *   @property {string} token - Токен подтверждения сброса пароля.
 *   @property {string} newPassword - Новый пароль пользователя.
 *   @property {string} repeatNewPassword - Повторение нового пароля пользователя.
 *
 * @returns {Promise<void>}  - Объект Promise, с данными ответа от сервера.
 * @throws {HTTPError} - (400, 403) В случае ошибки при выполнении запроса.
 *
 */

export const confirmResetPassword = (formData) =>
  HTTP.post(API_ENDPOINTS.AUTH.CONFIRM_RESET_PASSWORD, {
    body: JSON.stringify(transform.resetPasswordFormData(formData)),
  });

export const logout = () => {
  HTTP.accessToken = null;
  HTTP.refreshToken = null;
  window.location.href = "/";
};

export const authAPI = {
  signup,
  confirmSignup,
  signin,
  resetPassword,
  confirmResetPassword,
  logout,
};
