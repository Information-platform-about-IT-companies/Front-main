import { API_ENDPOINTS } from "services/constants";
import { HTTP } from "api/http";

/**
 * @typedef {Object} HTTPError
 * @property {string} message - Сообщение об ошибке.
 * @property {number} status - Код статуса HTTP ошибки.
 * @property {string} statusText - Текстовое описание статуса HTTP ошибки.
 * @property {Object} data - Дополнительные данные, связанные с ошибкой.
 *   @property {string} [query_param] - (400) Информация об ошибке, например, "User is inactive".
 */

/**
 * @typedef {Object} Industry
 * @property {number} id - Идентификатор отрасли.
 * @property {string} name - Название отрасли.
 */

/**
 * Получает список отраслей с сервера с использованием опций запроса.
 *
 * @param {string} [name] - Название отрасли для фильтрации списка (опционально).
 * @returns {Promise<Industry[]>} - Объект Promise, c массивом объектов с информацией об отраслях.
 */
export const fetchIndustries = async (name) =>
  HTTP.get(`${API_ENDPOINTS.INFO.INDUSTRIES}${name ? `?name=${name}` : ""}`);

/**
 * @typedef {Object} Service
 * @property {number} id - Идентификатор услуги.
 * @property {string} name - Название услуги.
 */

/**
 * @typedef {Object} ServiceCategory
 * @property {number} id - Идентификатор категории услуг.
 * @property {string} name - Название категории услуг.
 * @property {Service[]} services - Массив услуг в данной категории.
 */

/**
 * Получает список категорий услуг с сервера с использованием опций запроса.
 *
 * @param {string} [name] - Название категории услуг для фильтрации списка (опционально).
 * @returns {Promise<ServiceCategory[]>} - Объект Promise, который возвращает массив объектов с информацией о категориях услуг.
 */
export const fetchServiceCategories = (name) =>
  HTTP.get(`${API_ENDPOINTS.INFO.CATEGORIES}${name ? `?name=${name}` : ""}`);

/**
 * @typedef {Object} Service
 * @property {number} id - Идентификатор категории услуг.
 * @property {string} name - Название категории услуг.
 * @property {Object} category - Объект, представляющий родительскую категорию (если есть).
 *   @property {number} id - Идентификатор родительской категории.
 *   @property {string} name - Название родительской категории.
 */

/**
 * Получает список категорий услуг с сервера с использованием опций запроса.
 *
 * @param {string} [name] - Название категории услуг для фильтрации списка (опционально).
 * @returns {Promise<Service[]>} - Объект Promise, который возвращает массив объектов с информацией о категориях услуг.
 */
export const fetchServices = async (name) =>
  HTTP.get(`${API_ENDPOINTS.INFO.SERVICES}${name ? `?name=${name}` : ""}`);

/**
 * @typedef {Object} City
 * @property {number} id - Идентификатор города.
 * @property {string} name - Название города.
 */

/**
 * Получает список городов с сервера с использованием опций запроса.
 *
 * @param {string} [name] - Название города для фильтрации списка (опционально).
 * @returns {Promise<City[]>} - Объект Promise, который возвращает массив объектов с информацией о городах.
 */
export const fetchCities = async (name) =>
  HTTP.get(`${API_ENDPOINTS.INFO.CITIES}${name ? `?name=${name}` : ""}`);

/**
 * Получает результаты поиска компаний и услуг с сервера с использованием опций запроса.
 *
 * @param {string} [name] - Название компании или услуги для поиска (опционально).
 * @returns {Promise<void>} - Объект Promise.
 * @throws {HTTPError} - В случае ошибки при выполнении запроса.
 */
export const searchServicesCompanies = (name) =>
  HTTP.get(`${API_ENDPOINTS.INFO.SEARCH}${name ? `?name=${name}` : ""}`);

export const infoAPI = {
  fetchIndustries,
  fetchServiceCategories,
  fetchServices,
  fetchCities,
  searchServicesCompanies,
};
