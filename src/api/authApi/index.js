import { API_ENDPOINTS } from "services/constants";
import { transform } from "services/transform";
import { HTTP } from "api/http";

/**
 * @typedef {Object} ServerResponse
 * @property {number} status - Код статуса ответа (204, 400, 403).
 * @property {Object} errors - Объект с ошибками валидации в формате DRF.
 * @property {string[]} field_name - Массив ошибок для конкретного поля.
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
 * @returns {Promise<ServerResponse>}  - Объект Promise, с данными ответа от сервера.
 * @throws {Error} - В случае ошибки при выполнении запроса.
 *
 */

export const signup = async (formData) =>
  HTTP.post(API_ENDPOINTS.AUTH.SIGNUP, { body: transform.signupFormData(formData) });

/**
 *
 * Отправляет данные регистрации на сервер.
 *
 * @param {FormData} formData - Экземпляр FormData с данными для подтверждения регистрации.
 *   @property {string} uid - Уникальный идентификатор пользователя.
 *   @property {string} token - Токен подтверждения регистрации.
 *
 * @returns {Promise<ServerResponse>}  - Объект Promise, с данными ответа от сервера.
 * @throws {Error} - В случае ошибки при выполнении запроса.
 *
 */

export const confirmSignup = (formData) =>
  HTTP.get(API_ENDPOINTS.AUTH.SIGNUP_CONFIRM, { body: formData });

/**
 *
 * Авторизует пользователя на сервере.
 *
 * @param {Object} formData - Объект с данными для авторизации.
 *   @property {string} email - Адрес электронной почты пользователя.
 *   @property {string} password - Пароль пользователя..
 *
 * @returns {Promise<ServerResponse>}  - Объект Promise, с данными ответа от сервера.
 * @throws {Error} - В случае ошибки при выполнении запроса.
 *
 */

export const signin = async (formData) => HTTP.post(API_ENDPOINTS.AUTH.SIGNIN, { body: formData });

/**
 *
 * Отправляет запрос на сброс пароля.
 *
 * @param {Object} formData - Объект с данными для запроса сброса пароля.
 *   @property {string} email - Адрес электронной почты пользователя.
 *
 * @returns {Promise<ServerResponse>}  - Объект Promise, с данными ответа от сервера.
 * @throws {Error} - В случае ошибки при выполнении запроса.
 *
 */

export const resetPassword = async (formData) =>
  HTTP.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, { body: formData });

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
 * @returns {Promise<ServerResponse>}  - Объект Promise, с данными ответа от сервера.
 * @throws {Error} - В случае ошибки при выполнении запроса.
 *
 */

export const confirmResetPassword = (formData) =>
  HTTP.post(API_ENDPOINTS.AUTH.CHANGE_PASSWORD, {
    body: transform.resetPasswordFormData(formData),
  });

export const infoAPI = {
  signup,
  confirmSignup,
  signin,
  resetPassword,
  confirmResetPassword,
};
