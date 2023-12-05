import { ROUTES } from "services/constants";
import { LinkItem } from "UI-KIT/Link/LinkItem";
import "./CompanyLogo.scss";

export default function CompanyLogo({ logo, name, city }) {
  return (
    <div className="сompanyLogo__wrapper">
      {logo ? (
        <img src={logo} className="сompanyLogo__logo" alt={`Логотип компании ${name}`} />
      ) : (
        <div className="сompanyLogo__logo-cap" />
      )}
      <div className="сompanyLogo__title">
        <h2 className="сompanyLogo__name">{name}</h2>
        <LinkItem
          url={`${ROUTES.FILTER}/?cities=[${city?.id}]`}
          title={city?.name}
          extClassName="сompanyLogo__city"
          weight="400"
          textColor="var(--text-color)"
          lineColor="var(--link-underline)"
        />
      </div>
    </div>
  );
}
