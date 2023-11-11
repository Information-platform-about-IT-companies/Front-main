// Сторонние пакеты
import React from "react";
import { Link } from "react-router-dom";
// UI
import Icon from "UI-KIT/Icons";
import { Label } from "UI-KIT/Label/Label";
import { LinkItem } from "UI-KIT/Link/LinkItem";
// Функции
import { cutText, declinationsNumericalValues } from "services/constants";
// Стили
import "./CompanyCard.scss";
import ButtonIcon from "UI-KIT/ButtonIcon/ButtonIcon";

export default function ({
  logo,
  name,
  city,
  services,
  description,
  iconLikeState,
  onIconLikeClick,
  extClassCardName,
}) {
  const [isFill, setIsFill] = React.useState(false);

  // для кнопок "ЕЩЕ N УСЛУГ"
  let filterServices;
  let filterCount;
  if (services) {
    if (services.length > 3) {
      filterServices = services.slice(0, 3);
      filterCount = services.length - 3;
    } else filterServices = services.slice(0);
  }

  // для обрезки и ... многострочного текста
  const cutDescription = description ? cutText(description, 330) : null;

  return (
    <div className={`companyCard companyCard${extClassCardName}`}>
      <div className="companyCard__info">
        <div className="companyCard__about">
          {logo ? (
            <img src={logo} className="companyCard__logo" alt={`Логотип компании ${name}`} />
          ) : (
            <div className="companyCard__logo-cap" />
          )}
          <div className="companyCard__title">
            <h2 className="companyCard__name">{name}</h2>
            <span className="companyCard__city">{city}</span>
          </div>
        </div>
        {services ? (
          <div className="companyCard__buttonContainer">
            <ButtonIcon
              extClassName={isFill ? "iconHeart_active" : "iconHeart"}
              onClick={() => (isFill ? setIsFill(false) : setIsFill(true))}
              icon={<Icon icon="IconHeart" size="32" {...(isFill ? { fill: "fill" } : {})} />}
            />
          </div>
        ) : null}
      </div>

      {description ? <p className="companyCard__description">{cutDescription}</p> : null}
      {services ? (
        <div className="companyCard__services">
          <span className="companyCard__services-text">Услуги:</span>

          <ul className="companyCard__services-list">
            {filterServices.map((service) => (
              <li>
                <Link to="/" className="companyCard__services-list-item">
                  <Label title={service} />
                </Link>
              </li>
            ))}
            {filterCount && (
              <Label title={`Ещё ${filterCount} ${declinationsNumericalValues(filterCount)}`} />
            )}
          </ul>
        </div>
      ) : null}
      {services ? (
        <LinkItem
          title="Подробнее"
          url="/"
          lineColor="#4e4cbf"
          textColor="#4e4cbf"
          weight="700"
          extClassName="companyCard__fullInfo"
        />
      ) : (
        <div className="companyCard__itemsContainer">
          <LinkItem
            title="Подробнее"
            url="/"
            lineColor="#4e4cbf"
            textColor="#4e4cbf"
            weight="700"
            extClassName="companyCard__emptyInfo"
          />
          <Icon
            color="#414040"
            icon="IconLike"
            className="companyCard__btn-like"
            onClick={() => onIconLikeClick()}
            state={iconLikeState}
          />
        </div>
      )}
    </div>
  );
}
