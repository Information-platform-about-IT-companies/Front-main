// UI
import CompanyLogo from "UI-KIT/CompanyLogo/CompanyLogo";
import LabelGroup from "UI-KIT/LabelGroup/LabelGroup";
import { Button } from "UI-KIT/Button/Button";
import HideTextBlock from "UI-KIT/HideTextBlock/HideTextBlock";
// components
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import Map from "components/Map/Map";
// функции
import { company, declinationsNumericalValues } from "services/constants";
// стили
import "./CompanyPage.scss";

export default function () {
  const text = ["человек", "человека", "человек"];
  return (
    <main className="company-page">
      <Breadcrumbs />
      <section className="company__basic-info">
        <CompanyLogo logo={company.logo} name={company.name} city={company.city.name} />
        <div className="company__size-info">
          <p>
            Год основания: <span className="company__accent-text">{company.year_founded}</span>
          </p>
          <p>
            Численность компании:{" "}
            <span className="company__accent-text">
              {company.team_size} {declinationsNumericalValues(company.team_size, text)}
            </span>
          </p>
        </div>
        <div className="company__full-info">
          {company.description && (
            <HideTextBlock
              extClass="company__description"
              text={company.description}
              size={750}
              height="200px"
            />
          )}
        </div>
        <LabelGroup
          items={company.industries}
          title="Услуги"
          extClass="company__label-text"
          isLink
        />
        <LabelGroup items={company.services} title="Отрасли" extClass="company__label-text" />
      </section>
      <aside className="company__contact-info">
        <div className="company__btn-wrapper">
          <Button
            size="standard"
            title="Посетить сайт компании"
            extClassName="company__btn"
            linkType="link"
            url="/"
          />
          <Button
            size="standard"
            title="Добавить в избранное"
            extClassName="company__btn"
            onClick={() => {}}
          />
        </div>
        <div className="company__contact-wrapper">
          <span className="company__contact-title">Контакты</span>
          <div className="company__contact-block">
            <span className="company__contact-block_title">Номера телефонов:</span>
            <ul className="company__contact-block_subtitle">
              {!company.tel ? (
                <span>Нет доступных телефонов компании</span>
              ) : (
                company.tel.map((t) => <li>{t}</li>)
              )}
            </ul>
          </div>
          <div className="company__contact-block">
            <span className="company__contact-block_title">Email:</span>
            <span className="company__contact-block_subtitle">{company.email}</span>
          </div>
          <div className="company__contact-block">
            <span className="company__contact-block_title">Главный офис:</span>
            <span className="company__contact-block_subtitle">{company.address}</span>
            <Map company={company.name} address={company.address} />
          </div>
        </div>
      </aside>
    </main>
  );
}
