import "./LabelGroup.scss";
import { Link } from "react-router-dom";
import PropTypes, { number } from "prop-types";
import { Label } from "UI-KIT/Label/Label";
import { declinationsNumericalValues } from "services/constants";
import { useState } from "react";

export default function LabelGroup({
  title,
  items,
  extClass,
  isLink,
  companyId,
  full,
  checkedServices,
}) {
  const [isHovered, setIsHovered] = useState(Array(items.length).fill(false));

  const text = ["услуга", "услуги", "услуг"];
  // для кнопок "ЕЩЕ N УСЛУГ"
  if (!items) return null;
  let filterServices;
  let filterCount;
  if (!full && items.length > 3) {
    filterServices = items.slice(0, 3);
    filterCount = items.length - 3;
  } else filterServices = items.slice(0);
  // filterServices.filter((i) =>
  //   checkedServices.includes(i.id) ? console.log("YES") : console.log("NO"),
  // );
  return (
    <div className={`labels__wrapper ${extClass}`}>
      <span className="labels__text">{title}</span>

      <ul className="labels__list">
        {filterServices.map((item, index) => (
          <li key={item.name}>
            {isLink ? (
              // заменить потом на item.link
              <Link
                to={`/filter?services=[${item.id}]`}
                className="labels__list-item"
                onMouseEnter={() =>
                  setIsHovered((prev) => {
                    const newHovered = [...prev];
                    newHovered[index] = true;
                    return newHovered;
                  })
                }
                onMouseLeave={() =>
                  setIsHovered((prev) => {
                    const newHovered = [...prev];
                    newHovered[index] = false;
                    return newHovered;
                  })
                }
              >
                <Label
                  title={item.name}
                  extClassName={`${
                    checkedServices.includes(item.id) ? "label_checked " : ""
                  } labels__link`}
                />
                <span
                  className="labels__tooltip"
                  style={{ display: isHovered[index] && item.name.length > 15 ? "block" : "none" }}
                >
                  {item.name}
                </span>{" "}
              </Link>
            ) : (
              <Label title={item.name} />
            )}
          </li>
        ))}
        {filterCount && (
          <Link to={`/companies/${companyId}`} className="labels__list-item">
            <Label
              title={`Ещё ${filterCount} ${declinationsNumericalValues(filterCount, text)}`}
              extClassName="labels__link"
            />
          </Link>
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
  companyId: PropTypes.string,
  isLink: PropTypes.bool,
  full: PropTypes.bool,
  extClass: PropTypes.string,
  checkedServices: PropTypes.arrayOf(number),
};

LabelGroup.defaultProps = {
  companyId: "",
  isLink: false,
  full: false,
  extClass: "",
  checkedServices: [],
};
