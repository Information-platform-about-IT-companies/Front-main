import "./LabelGroup.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Label } from "UI-KIT/Label/Label";
import { declinationsNumericalValues } from "services/constants";

export default function LabelGroup({ title, items, extClass, isLink, full }) {
  const text = ["услуга", "услуги", "услуг"];
  // для кнопок "ЕЩЕ N УСЛУГ"
  if (!items) return null;
  let filterServices;
  let filterCount;
  if (!full && items.length > 3) {
    filterServices = items.slice(0, 3);
    filterCount = items.length - 3;
  } else filterServices = items.slice(0);
  return (
    <div className={`labels__wrapper ${extClass}`}>
      <span className="labels__text">{title}</span>

      <ul className="labels__list">
        {filterServices.map((item) => (
          <li key={item.name}>
            {isLink ? (
              // заменить потом на item.link
              <Link to={`/filter?services=[${item.id}]`} className="labels__list-item">
                <Label title={item.name} extClassName="labels__link" />
              </Link>
            ) : (
              <Label title={item.name} />
            )}
          </li>
        ))}
        {filterCount && (
          <Label title={`Ещё ${filterCount} ${declinationsNumericalValues(filterCount, text)}`} />
        )}
      </ul>
    </div>
  );
}

LabelGroup.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isLink: PropTypes.bool,
  full: PropTypes.bool,
  extClass: PropTypes.string,
};

LabelGroup.defaultProps = {
  isLink: false,
  full: false,
  extClass: "",
};
