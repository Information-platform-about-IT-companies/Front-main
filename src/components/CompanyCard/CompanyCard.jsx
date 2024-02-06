import PropTypes from "prop-types";
// Components
import ButtonHeart from "components/ButtonHeart/ButtonHeart";
// UI
import CompanyLogo from "UI-KIT/CompanyLogo/CompanyLogo";
import LabelGroup from "UI-KIT/LabelGroup/LabelGroup";
import { LinkItem } from "UI-KIT/Link/LinkItem";
// Функции
import { cutText } from "services/constants";
// Стили
import "./CompanyCard.scss";

export default function CompanyCard({
  id,
  type,
  logo,
  name,
  city,
  services,
  description,
  onIconHeartClick,
  extClassCardName,
  inFavorite,
  checkedServices,
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
          <div className="companyCard__buttonHeartContainer">
            <ButtonHeart click={() => onIconHeartClick(id)} fill={inFavorite} />
          </div>
        </div>
        {description ? <p className="companyCard__description">{cutDescription}</p> : null}
        <LabelGroup items={services} title="Услуги" isLink checkedServices={checkedServices} />
        <LinkItem
          title="Подробнее"
          url={`/companies/${id}`}
          lineColor="var(--profile-company-fullinfo)"
          textColor="var(--profile-company-fullinfo)"
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
            <div className="companyCard__buttonHeartContainer">
              <ButtonHeart click={() => onIconHeartClick(id)} fill={inFavorite} />
            </div>
            <LinkItem
              title="Подробнее"
              url={`/companies/${id}`}
              lineColor="var(--profile-company-fullinfo)"
              textColor="var(--profile-company-fullinfo)"
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
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  services: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  ),
  description: PropTypes.string,
  onIconHeartClick: PropTypes.func,
  inFavorite: PropTypes.bool.isRequired,
  extClassCardName: PropTypes.string,
};

CompanyCard.defaultProps = {
  logo: null,
  city: {},
  onIconHeartClick: () => {},
  extClassCardName: "",
  description: "",
  services: [],
};
