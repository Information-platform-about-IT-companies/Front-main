import "./CategoryTitle.scss";
import PropTypes from "prop-types";
import Icon from "UI-KIT/Icons";

export function CategoryTitle({ title, id }) {
  let iconName;

  if (id === "1") {
    iconName = "IconСategoryWeb";
  } else if (id === "2") {
    iconName = "IconСategorySoftware";
  } else if (id === "3") {
    iconName = "IconСategoryDesign";
  } else {
    iconName = "IconСategoryMarketing";
  }

  return (
    <span className="category_title">
      <Icon icon={iconName} extClassName="category_icon" />
      {title}
    </span>
  );
}

CategoryTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
