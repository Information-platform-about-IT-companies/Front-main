import Breadcrumbs from "UI-KIT/Breadcrumbs/Breadcrumbs";
import { company } from "services/constants";
import { Link } from "react-router-dom";
import { LinkItem } from "../../UI-KIT/Link/LinkItem";
import { Label } from "../../UI-KIT/Label/Label";
import "./CompanyPage.scss";

export default function () {
  return (
    <main className="company-page">
      <Breadcrumbs />
      <section className="company__basic-info">
        <div className="company__profile">
          <img className="company__logo" src={company.logo} alt="profile img" />
          <div>
            <h1 className="company__name">{company.name}</h1>
            <span className="company__city">{company.city.name}</span>
          </div>
        </div>
        <div className="company__size-info">
          Год основания: <span>{company.year_founded}</span>
          Численность компании: <span>{company.year_founded}</span>
        </div>
        <div className="company__full-ino">
          <p className="company__description">{company.description}</p>
          <LinkItem textColor="#4E4CBF" lineColor="#4E4CBF" title="Развернуть" url="/" />
        </div>
        <div className="company__industries">
          <span className="company__industries-text">Отрасти:</span>

          <ul className="company__industries-list">
            {company.industries.map((industry) => (
              <li key={industry.id}>
                <Link to="/" className="company__services-list-item">
                  <Label title={industry.name} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
