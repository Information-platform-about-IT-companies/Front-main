// eslint-disable-next-line import/no-extraneous-dependencies
import { cityIn } from "lvovich";
// функции
import { declinationsNumericalValues } from "services/constants";
import findServiceById from "services/findServiceById";

export default function FilterPageHeader({ filterInfo, companyInfo }) {
  const company = ["компания", "компании", "компаний"];
  const provide = ["предоставляет", "предоставляют", "предоставляют"];
  const totalCompany = companyInfo.totalCompanies;
  const companyDeclension = declinationsNumericalValues(totalCompany, company);
  const porvideDeclension = declinationsNumericalValues(totalCompany, provide);
  const cityName =
    filterInfo.checkedCities.length === 1
      ? filterInfo.cities.find((city) => city.id === filterInfo.checkedCities[0])?.name || ""
      : "";
  const cityNameFormatted = cityName ? cityIn(cityName) : "";
  const serviceName =
    filterInfo.checkedServices.length === 1
      ? findServiceById(filterInfo.categories, filterInfo.checkedServices[0])?.name
      : null;

  let textHeader;

  switch (true) {
    case totalCompany === 0:
      break;
    case !filterInfo.checkedCities.length && !filterInfo.checkedServices.length:
      textHeader = "Изучите лучшие компании России";
      break;
    case !filterInfo.checkedCities.length && filterInfo.checkedServices.length === 1:
      textHeader = `В России ${totalCompany} ${companyDeclension} ${porvideDeclension} услугу «${serviceName}»`;
      break;
    case !filterInfo.checkedCities.length && filterInfo.checkedServices.length > 1:
      textHeader = `В России ${totalCompany} ${companyDeclension} ${porvideDeclension} выбранные услуги`;
      break;
    case filterInfo.checkedCities.length === 1 && !filterInfo.checkedServices.length:
      textHeader = `В ${cityNameFormatted} ${totalCompany} IT-${companyDeclension}`;
      break;
    case filterInfo.checkedCities.length === 1 && filterInfo.checkedServices.length === 1:
      textHeader = `В ${cityNameFormatted} ${totalCompany} ${companyDeclension} ${porvideDeclension} услугу «${serviceName}»`;
      break;
    case filterInfo.checkedCities.length === 1 && filterInfo.checkedServices.length > 1:
      textHeader = `В ${cityNameFormatted} ${totalCompany} ${companyDeclension} ${porvideDeclension} выбранные услуги`;
      break;
    case filterInfo.checkedCities.length > 1 && !filterInfo.checkedServices.length:
      textHeader = `В выбранных городах ${totalCompany} IT-${companyDeclension}`;
      break;
    case filterInfo.checkedCities.length > 1 && filterInfo.checkedServices.length === 1:
      textHeader = `В выбранных городах ${totalCompany} ${companyDeclension} ${porvideDeclension} услугу «${serviceName}»`;
      break;
    case filterInfo.checkedCities.length > 1 && filterInfo.checkedServices.length > 1:
      textHeader = `В выбранных городах ${totalCompany} ${companyDeclension} ${porvideDeclension} выбранные услуги`;
      break;
    default:
      textHeader = "Ой, произошла ошибка";
      break;
  }

  return <h1 className="filterPage__title">{textHeader}</h1>;
}
