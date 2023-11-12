import PropTypes from "prop-types";
// UI
import Icon from "UI-KIT/Icons";
import CompanyLogo from "UI-KIT/CompanyLogo/CompanyLogo";
import LabelGroup from "UI-KIT/LabelGroup/LabelGroup";
import ButtonIcon from "UI-KIT/ButtonIcon/ButtonIcon";
import { LinkItem } from "UI-KIT/Link/LinkItem";
// Функции
import { cutText } from "services/constants";
// Стили
import "./CompanyCard.scss";

export default function CompanyCard({
  type,
  logo,
  name,
  city,
  services,
  description,
  onIconLikeClick,
  extClassCardName,
}) {
  const isFilterCard = type === "filterCard";
  const isFavoriteCard = type === "favoriteCard";
  // для обрезки и ... многострочного текста
  if (isFilterCard) {
    const cutDescription = description && cutText(description, 330);
    return (
      <div className={`companyCard ${extClassCardName}`}>
        <div className="companyCard__info">
          <CompanyLogo logo={logo} name={name} city={city} />
          <ButtonIcon
            icon={<Icon icon="IconHeart" size="32" />}
            onClick={() => onIconLikeClick()}
            extClassName="companyCard__like"
          />
        </div>
        {description ? <p className="companyCard__description">{cutDescription}</p> : null}
        <LabelGroup items={services} title="Услуги" isLink />
        <LinkItem
          title="Подробнее"
          url="/"
          lineColor="#4e4cbf"
          textColor="#4e4cbf"
          weight="700"
          extClassName="companyCard__fullInfo"
        />
      </div>
    );
  }
  if (isFavoriteCard) {
    return (
      <div className="companyCard companyCard_type_favourite">
        <div className="companyCard__info">
          <CompanyLogo logo={logo} name={name} city={city} />
          <div className="companyCard__like-wrapper">
            <ButtonIcon
              icon={<Icon icon="IconHeart" size="32" fill />}
              onClick={() => onIconLikeClick()}
              extClassName="companyCard__like"
            />
            <LinkItem
              title="Подробнее"
              url="/"
              lineColor="#4e4cbf"
              textColor="#4e4cbf"
              weight="700"
              extClassName="companyCard__fullInfo"
            />
          </div>
        </div>
      </div>
    );
  }
}

CompanyCard.propTypes = {
  type: PropTypes.string.isRequired,
  logo: PropTypes.string,
  name: PropTypes.string.isRequired,
  city: PropTypes.string,
  services: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  ).isRequired,
  description: PropTypes.string.isRequired,
  onIconLikeClick: PropTypes.func,
  extClassCardName: PropTypes.string,
};

CompanyCard.defaultProps = {
  logo: null,
  city: "",
  onIconLikeClick: () => {},
  extClassCardName: "",
};
