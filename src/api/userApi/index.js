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
 * @typedef {Object} UserData
 * @property {number} id - Идентификатор пользователя.
 * @property {string} email - Адрес электронной почты пользователя.
 * @property {string} userName - Имя пользователя.
 * @property {string} userSurname - Фамилия пользователя.
 */

/**
 * ЛК текущего пользователя.
 *
 * @returns {Promise<UserData>} - Объект Promise, который разрешается объектом с данными о текущем пользователе.
 * @throws {HTTPError} - В случае ошибки при выполнении запроса.
 */
export const getCurrentUser = async () => {
  const user = await HTTP.get(API_ENDPOINTS.USER.ME);
  return transform.userData(user);
};

/**
 * Изменение информации о текущем пользователе.
 *
 * @param {Object} formData - Объект с данными для обновления профиля пользователя.
 *   @property {string} [first_name] - Новое имя пользователя.
 *   @property {string} [last_name] - Новая фамилия пользователя.
 *
 * @returns {Promise<UserData>} - Объект Promise, который разрешается обновленными данными о текущем пользователе.
 * @throws {HTTPError} - В случае ошибки при выполнении запроса.
 */
export const updateUser = async (formData) => {
  const user = await HTTP.patch(API_ENDPOINTS.USER.ME, { body: transform.userFormData(formData) });
  return transform.userData(user);
};

/**
 * @typedef {Object} ResetPasswordFormData
 * @property {string} current_password - Текущий пароль пользователя.
 * @property {string} new_password - Новый пароль пользователя.
 * @property {string} re_new_password - Повторение нового пароля пользователя.
 */

/**
 * Сбрасывает пароль текущего пользователя с использованием предоставленных данных.
 *
 * @param {ResetPasswordFormData} formData - Данные для сброса пароля текущего пользователя.
 * @returns {Promise<void>} - Объект Promise без конкретных данных, разрешаемый при успешном выполнении запроса.
 * @throws {HTTPError} - В случае ошибки при выполнении запроса.
 */
export const resetPassword = async (formData) => {
  HTTP.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, {
    body: transform.resetCurrentUserPasswordFormData(formData),
  });
};

export const infoAPI = {
  getCurrentUser,
  updateUser,
  resetPassword,
};
