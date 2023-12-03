// eslint-disable-next-line import/no-extraneous-dependencies
import { cityIn, cityFrom } from "lvovich";
// функции
import { declinationsNumericalValues } from "services/constants";
import searchNameServiceByIdInArrayCategories from "services/searchNameServiceByIdInArrayCategories";

export default function FilterPageHeader({ filterInfo, companyInfo }) {
  const company = ["компания", "компании", "компаний"];
  const provide = ["предоставляет", "предоставляют", "предоставляют"];
  const totalCompany = companyInfo.totalCompanies;
  const cityName =
    filterInfo.checkedCities.length === 1
      ? cityIn(filterInfo.cities.find((city) => city.id === filterInfo.checkedCities[0])?.name)
      : null;
  const serviceName =
    filterInfo.checkedServices.length === 1
      ? searchNameServiceByIdInArrayCategories(filterInfo.categories, filterInfo.checkedServices[0])
          ?.name
      : null;

  let textHeader;

  switch (true) {
    case totalCompany === 0:
      break;
    case !filterInfo.checkedCities.length && !filterInfo.checkedServices.length:
      textHeader = "Изучите лучшие компании России";
      break;
    case !filterInfo.checkedCities.length && filterInfo.checkedServices.length === 1:
      textHeader = `В России ${totalCompany} ${declinationsNumericalValues(
        totalCompany,
        company,
      )} ${declinationsNumericalValues(totalCompany, provide)} услугу «${serviceName}»`;
      break;
    case !filterInfo.checkedCities.length && filterInfo.checkedServices.length > 1:
      textHeader = `В России ${totalCompany} ${declinationsNumericalValues(
        totalCompany,
        company,
      )} ${declinationsNumericalValues(totalCompany, provide)} выбранные услуги`;
      break;
    case filterInfo.checkedCities.length === 1 && !filterInfo.checkedServices.length:
      textHeader = `В ${cityName} ${totalCompany} IT-${declinationsNumericalValues(
        totalCompany,
        company,
      )}`;
      break;
    case filterInfo.checkedCities.length === 1 && filterInfo.checkedServices.length === 1:
      textHeader = `В ${cityName} ${totalCompany} ${declinationsNumericalValues(
        totalCompany,
        company,
      )} ${declinationsNumericalValues(totalCompany, provide)} услугу «${serviceName}»`;
      break;
    case filterInfo.checkedCities.length === 1 && filterInfo.checkedServices.length > 1:
      textHeader = `В ${cityName} ${totalCompany} ${declinationsNumericalValues(
        totalCompany,
        company,
      )} ${declinationsNumericalValues(totalCompany, provide)} выбранные услуги`;
      break;
    case filterInfo.checkedCities.length > 1 && !filterInfo.checkedServices.length:
      textHeader = `В выбранных городах ${totalCompany} IT-${declinationsNumericalValues(
        totalCompany,
        company,
      )}`;
      break;
    case filterInfo.checkedCities.length > 1 && filterInfo.checkedServices.length === 1:
      textHeader = `В выбранных городах ${totalCompany} ${declinationsNumericalValues(
        totalCompany,
        company,
      )} ${declinationsNumericalValues(totalCompany, provide)} услугу «${serviceName}»`;
      break;
    case filterInfo.checkedCities.length > 1 && filterInfo.checkedServices.length > 1:
      textHeader = `В выбранных городах ${totalCompany} ${declinationsNumericalValues(
        totalCompany,
        company,
      )} ${declinationsNumericalValues(totalCompany, provide)} выбранные услуги`;
      break;
    default:
      textHeader = "Ой, произошла ошибка";
      break;
  }

  return <h1 className="filterPage__title">{textHeader}</h1>;
}
