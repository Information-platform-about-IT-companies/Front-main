import Icon from "UI-KIT/Icons";
import { Link } from "react-router-dom";
import { Label } from "UI-KIT/Label/Label";
import { declinationsNumericalValues } from "services/constants";

export default function ({ logo, name, city, services, about, onIconLikeClick }) {
  let filterServices;
  let filterCount;
  if (services.length > 3) {
    filterServices = services.slice(0, 3);
    filterCount = services.length - 3;
  } else filterServices = services.slice(0);
  return (
    <div className="companyCard">
      <div className="companyCard__info">
        {logo ? (
          <img src={logo} className="companyCard__logo" alt={`Логотип компании ${name}`} />
        ) : (
          <div className="companyCard__logo-cap">logo</div>
        )}
        <div className="companyCard__about">
          <h2 className="companyCard__name">{name}</h2>
          <span className="companyCard__city">{city}</span>
        </div>
        <Icon icon="IconLike" className="companyCard__btn-like" onClick={() => onIconLikeClick()} />
      </div>
      <p>{about}</p>
      <div className="companyCard__services">
        <span className="companyCard__services-text">Услуги:</span>
        <ul className="companyCard__services-list">
          {filterServices.map((service) => (
            <li>
              <Link to="/">
                <Label title={service} />
              </Link>
            </li>
          ))}
          {filterCount && (
            <Label title={`Ещё ${filterCount} ${declinationsNumericalValues(filterCount)}`} />
          )}
        </ul>
      </div>
    </div>
  );
}
