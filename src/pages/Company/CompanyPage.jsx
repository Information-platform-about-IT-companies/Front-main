import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { companyAPI } from "api/companyAPI";
import { useErrorHandler } from "hooks/useErrorHandler";
import { useToggleFavorited } from "hooks/useFavorited";
import { useLoggedIn } from "hooks/useLoggedIn";
// UI
import CompanyLogo from "UI-KIT/CompanyLogo/CompanyLogo";
import LabelGroup from "UI-KIT/LabelGroup/LabelGroup";
import { Button } from "UI-KIT/Button/Button";
import HideTextBlock from "UI-KIT/HideTextBlock/HideTextBlock";
import { SignInOrSignUp } from "UI-KIT/SignInOrSignUp/SignInOrSignUp";
import Spinner from "UI-KIT/Spinner/Spinner";
// components
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import Map from "components/Map/Map";
// функции
import { declinationsNumericalValues } from "services/constants";
// стили
import "./CompanyPage.scss";

export default function CompanyPage() {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);
  const isCompanyFetched = company !== null;
  const [Error, setError] = useErrorHandler();
  const toggleFavorited = useToggleFavorited();
  const loggedIn = useLoggedIn();

  useEffect(() => {
    const fetchCompany = async (id) => {
      try {
        const fetchedCompany = await companyAPI.fetchCompany(id, { withCredentials: loggedIn });
        setCompany(fetchedCompany);
      } catch (error) {
        setError(error);
      }
    };
    if (!isCompanyFetched || loggedIn) {
      fetchCompany(companyId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companyId, loggedIn]);

  const onToggleFavorited = async () => {
    const currentStatus = company.isFavorited;
    setCompany({ ...company, isFavorited: !currentStatus });
    try {
      await toggleFavorited(company);
    } catch (error) {
      setError(
        <SignInOrSignUp />,
        "Чтобы добавить компанию в избранное, необходимо войти в личный кабинет или зарегистрироваться",
      );
      setCompany({ ...company, isFavorited: currentStatus });
    }
  };

  const text = ["человек", "человека", "человек"];

  return (
    <main className="company-page">
      <Breadcrumbs company={company} />
      <section className="company__basic-info">
        {isCompanyFetched ? (
          <>
            <CompanyLogo logo={company.logo} name={company.name} city={company?.city} />
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
              items={company.services}
              title="Услуги"
              extClass="company__label-text labels_full"
              isLink
              full
            />
            <LabelGroup
              items={company.industries}
              title="Отрасли"
              extClass="company__label-text labels_full"
              isLink
              full
            />
          </>
        ) : (
          <Spinner />
        )}
      </section>

      <aside className="company__contact-info">
        <div className="company__btn-wrapper">
          <Button
            size="standard"
            title="Посетить сайт компании"
            extClassName="company__btn"
            linkType="link"
            url={company?.website}
          />
          <Button
            size="standard"
            title={company?.isFavorited ? "Удалить из избранного" : "Добавить в избранное"}
            extClassName="company__btn"
            onClick={onToggleFavorited}
          />
        </div>
        <div className="company__contact-wrapper">
          <span className="company__contact-title">Контакты</span>
          <div className="company__contact-block">
            <span className="company__contact-block_title">Номера телефонов:</span>
            <ul className="company__contact-block_subtitle">
              {company && company.phones ? (
                company.phones.map((t) => <li>{t}</li>)
              ) : (
                <span>Нет доступных телефонов компании</span>
              )}
            </ul>
          </div>
          <div className="company__contact-block">
            <span className="company__contact-block_title">Email:</span>
            <span className="company__contact-block_subtitle">{company && company.email}</span>
          </div>
          <div className="company__contact-block">
            <span className="company__contact-block_title">Главный офис:</span>
            <span className="company__contact-block_subtitle">{company && company.address}</span>
            {isCompanyFetched && <Map company={company.name} address={company.address} />}
          </div>
        </div>
      </aside>
      <Error />
    </main>
  );
}
