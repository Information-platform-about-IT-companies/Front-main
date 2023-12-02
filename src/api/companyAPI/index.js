import { API_ENDPOINTS } from "services/constants";
import { transform } from "services/transform";
import { HTTP } from "api/http";

/**
 * @typedef {Object} HTTPError
 * @property {string} message - Сообщение об ошибке.
 * @property {number} status - Код статуса HTTP ошибки.
 * @property {string} statusText - Текстовое описание статуса HTTP ошибки.
 * @property {Object} data - Дополнительные данные, связанные с ошибкой.
 *   @property {string} [detail] - (404) Информация об ошибке.
 */

/**
 * @typedef {Object} Company
 * @property {number} id - Идентификатор компании.
 * @property {string} name - Название компании.
 * @property {string} logo - Ссылка на логотип компании.
 * @property {Object} city - Информация о городе, в котором расположена компания.
 *   @property {number} id - Идентификатор города.
 *   @property {string} name - Название города.
 * @property {string} description - Описание компании.
 * @property {Object[]} services - Массив услуг, предоставляемых компанией.
 *   @property {number} id - Идентификатор услуги.
 *   @property {string} name - Название услуги.
 * @property {boolean} is_favorited - Флаг, указывающий наличие компании в избранном (true - да, false - нет).
 */

/**
 * @typedef {Object} ServerResponse
 * @property {number} total_pages - Общее количество страниц.
 * @property {string} next_page - Ссылка на следующую страницу результатов.
 * @property {string} previous_page - Ссылка на предыдущую страницу результатов.
 * @property {Company[]} results - Массив компаний.
 */

/**
 * Получает список компаний с сервера с использованием опций запроса.
 *
 * @param {Object} options - Объект с опциями запроса для получения списка компаний.
 *   @property {number} [page] - Номер страницы для пагинации.
 *   @property {number} [pageSize] - Размер страницы для пагинации.
 *   @property {number} [city] - Идентификатор города.
 *   @property {number} [service] - Идентификатор услуги.
 *   @property {number} [company] - Идентификатор компании.
 *   @property {number} [isFavorited] - Флаг, указывающий наличие в избранном (1 - да, 0 - нет).
 *
 *
 * @returns {Promise<ServerResponse>}  - Объект Promise, с данными ответа от сервера.
 */

export const fetchCompanies = async (options, { withCredentials }) => {
  const response = await HTTP.get(API_ENDPOINTS.COMPANIES.FETCH(options), {
    ...(withCredentials
      ? {
          withCredentials,
          headers: { Authorization: `Bearer ${HTTP.accessToken}` },
        }
      : {}),
  });
  response.results = response?.results.map((item) => transform.company(item));
  return response;
};

/**
 * @typedef {Object} CompanyDetails
 * @property {number} id - Идентификатор компании.
 * @property {string} name - Название компании.
 * @property {string} description - Описание компании.
 * @property {string} email - Адрес электронной почты компании.
 * @property {string[]} phones - Массив телефонных номеров компании.
 * @property {Object} city - Информация о городе, в котором расположена компания.
 *   @property {number} id - Идентификатор города.
 *   @property {string} name - Название города.
 * @property {string} address - Адрес компании.
 * @property {Object[]} industries - Массив отраслей, к которым относится компания.
 *   @property {number} id - Идентификатор отрасли.
 *   @property {string} name - Название отрасли.
 * @property {Object[]} services - Массив услуг, предоставляемых компанией.
 *   @property {number} id - Идентификатор услуги.
 *   @property {string} name - Название услуги.
 *   @property {Object} category - Информация о категории услуги.
 *     @property {number} id - Идентификатор категории.
 *     @property {string} name - Название категории.
 * @property {string} logo - Ссылка на логотип компании.
 * @property {string} website - Ссылка на веб-сайт компании.
 * @property {number} team_size - Количество сотрудников в компании.
 * @property {number} year_founded - Год основания компании.
 * @property {boolean} is_favorited - Флаг, указывающий наличие компании в избранном (true - да, false - нет).
 */

/**
 * Получает детальную информацию о компании с сервера по её идентификатору.
 *
 * @param {number} id - Идентификатор компании.
 * @returns {Promise<CompanyDetails>} - Объект Promise, который разрешается с детальной информацией о компании.
 * @throws {HTTPError} - (404) В случае ошибки при выполнении запроса.
 */

export const fetchCompany = async (id, { withCredentials }) => {
  const company = await HTTP.get(API_ENDPOINTS.COMPANIES.GET(id), {
    ...(withCredentials
      ? {
          withCredentials,
          headers: { Authorization: `Bearer ${HTTP.accessToken}` },
        }
      : {}),
  });
  return transform.company(company);
};

export const companyAPI = { fetchCompanies, fetchCompany };
