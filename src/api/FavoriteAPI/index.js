import { API_ENDPOINTS } from "services/constants";
import { HTTP } from "api/http";

/**
 * @typedef {Object} HTTPError
 * @property {string} message - Сообщение об ошибке.
 * @property {number} status - Код статуса HTTP ошибки.
 * @property {string} statusText - Текстовое описание статуса HTTP ошибки.
 * @property {Object} data - Дополнительные данные, связанные с ошибкой.
 *   @property {string} [detail] - (400,401,403) Информация об ошибке, например, "Учетные данные не были предоставлены.".
 */

/**
Добавить компанию в избранное.
 *
 * @param {number} id - Идентификатор компании, которую нужно добавить в избранное.
 * @returns {Promise<void>} - Объект Promise, разрешаемый при успешном добавлении в избранное.
 * @throws {HTTPError} - В случае ошибки при выполнении запроса.
 */
export const addFavorited = async (id) => HTTP.post(API_ENDPOINTS.FAVORITE.ADD(id));

/**
Удалить компанию из избранного.
 *
* @param {number} id - Идентификатор компании, которую нужно удалить из избранного.
* @returns {Promise<void>} - Объект Promise, разрешаемый при успешном удалении из избранного.
* @throws {HTTPError} - В случае ошибки при выполнении запроса.
*/

export const removeFavorited = async (id) => HTTP.delete(API_ENDPOINTS.FAVORITE.ADD(id));

export const favoriteApi = {
  addFavorited,
  removeFavorited,
};
