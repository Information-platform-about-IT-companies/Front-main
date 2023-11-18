import { API_ENDPOINTS } from "services/constants";
import { HTTP } from "api/http";

/**
 * @typedef {Object} HTTPError
 * @property {string} message - Сообщение об ошибке.
 * @property {number} status - Код статуса HTTP ошибки.
 * @property {string} statusText - Текстовое описание статуса HTTP ошибки.
 * @property {Object} data - Дополнительные данные, связанные с ошибкой.
 *   @property {string} [detail] - (401) Информация об ошибке, например, "Учетные данные не были предоставлены.".
 */

/**
 * Обновление JWT токенов.
 *
 * @param {Object} formData - Данные для обновления токена.
 *   @property {string} refresh - Обновляющий токен.
 * @returns {Promise<Object>} - Объект Promise, разрешаемый данными с обновленными токенами.
 *   @property {string} access - Обновленный токен доступа.
 *   @property {string} refresh - Обновленный обновляющий токен.
 * @throws {HTTPError} - В случае ошибки при выполнении запроса.
 */
export const refreshToken = async (formData) =>
  HTTP.post(API_ENDPOINTS.TOKENS.REFRESH, {
    body: formData,
  });

export const tokensApi = {
  refreshToken,
};
