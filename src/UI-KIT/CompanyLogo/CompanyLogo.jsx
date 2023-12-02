import { Link } from "react-router-dom";
import { ROUTES } from "services/constants";
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
        <Link to={`${ROUTES.FILTER}/?cities=[${city?.id}]`} className="сompanyLogo__city-link">
          <span className="сompanyLogo__city">{city?.name}</span>
        </Link>
      </div>
    </div>
  );
}
