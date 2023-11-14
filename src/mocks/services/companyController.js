/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import { companies, allServices, cities, sleep, COMPANIES_PER_PAGE } from "services/constants";

function hasIntersection(array1, array2) {
  // Преобразуем массивы в наборы (Set) для быстрой проверки уникальных элементов
  const set1 = new Set(array1);
  const set2 = new Set(array2);

  // Проверяем, есть ли общие элементы в двух наборах
  for (const element of set1) {
    if (set2.has(element)) {
      return true; // Найдено пересечение
    }
  }

  // Если цикл завершился без возврата, значит, пересечения нет
  return false;
}

const loreum = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae 
  laborum nam nobis reprehenderit, tempora? Ab dolor dolorum esse, explicabo fugiat labore
  molestiae nulla officiis, omnis pariatur quaerat quasi quibusdam rerum suscipit veritatis. 
  Accusamus, accusantium enim iusto libero magnam neque nihil porro praesentium qui ratione
  vero voluptate! Quia, quos similique?`;

let y = 0;
const mockServices = allServices.reduce(
  (arr, { id, category, services }) =>
    arr.concat(services.map((item) => ({ id: y++, name: item, category: { id, name: category } }))),
  [],
);

const fullCities = cities.map((item, i) => ({ id: i, name: item }));
const mockCompanies = companies.map(({ name, city, isFavourite }, i) => ({
  id: i,
  name,
  logo: "logo",
  city: fullCities.find((item) => item.name === city),
  description: loreum.replace(/\n/g, ""),
  services: mockServices.slice(i * 2, i * 2 + 5),
  is_favorited: isFavourite,
}));

const getCompanies = async (props) => {
  const { page, pageSize = COMPANIES_PER_PAGE, city, service, isFavourite } = props || {};
  const currentPage = page ?? 1;
  const startPosition = (currentPage - 1) * pageSize;
  const isFilteringRequired = city || service || typeof isFavourite === "boolean";

  const companiesFiltered = isFilteringRequired
    ? mockCompanies.filter(
        (company) =>
          (!city || city.includes(company.city.id)) &&
          (!service ||
            hasIntersection(
              service,
              company.services.map(({ id }) => id),
            )) &&
          (typeof isFavourite !== "boolean" || company.is_favorited === isFavourite),
      )
    : null;

  const TotalPages = Math.ceil((companiesFiltered || mockCompanies).length / pageSize);

  const companiesSlice = (companiesFiltered || mockCompanies).slice(
    startPosition,
    startPosition + pageSize,
  );

  await sleep(1000);

  return {
    total_pages: TotalPages,
    next_page: `/api/v1/companies/?page=${currentPage + 1}`,
    previous_page: `/api/v1/companies/?page=${currentPage - 1}`,
    results: companiesSlice,
  };
};

export { getCompanies };
