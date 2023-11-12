/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import { companies, hardcode, sleep, COMPANIES_PER_PAGE } from "services/constants";

const loreum = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae 
  laborum nam nobis reprehenderit, tempora? Ab dolor dolorum esse, explicabo fugiat labore
  molestiae nulla officiis, omnis pariatur quaerat quasi quibusdam rerum suscipit veritatis. 
  Accusamus, accusantium enim iusto libero magnam neque nihil porro praesentium qui ratione
  vero voluptate! Quia, quos similique?`;

const mockServices = hardcode.companies.reduce((accumulator, currentValue) => {
  let i = accumulator.length;
  return accumulator.concat(currentValue.comp.map((service) => ({ id: i++, name: service.title })));
}, []);

const mockCompanies = companies.map(({ name, city, isFavourite }, i) => ({
  id: i,
  name,
  logo: "logo",
  city,
  description: loreum.replace(/\n/g, ""),
  services: mockServices.slice(i * 2, i * 2 + 5),
  is_favorited: isFavourite,
}));

const getCompanies = async (props) => {
  const { page, pageSize = COMPANIES_PER_PAGE, city, isFavourite } = props || {};
  const currentPage = page ?? 1;
  const TotalPages = Math.ceil(companies.length / pageSize);
  const startPosition = (currentPage - 1) * pageSize;
  const isFilteringRequired = city || typeof isFavourite === "boolean";

  const companiesFiltered = isFilteringRequired
    ? mockCompanies.filter(
        (company) =>
          (!city || company.city === city) &&
          (typeof isFavourite !== "boolean" || company.is_favorited === isFavourite),
      )
    : null;

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
