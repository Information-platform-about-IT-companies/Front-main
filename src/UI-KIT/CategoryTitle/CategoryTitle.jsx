import "./CategoryTitle.scss";
import PropTypes from "prop-types";
import Icon from "UI-KIT/Icons";

export function CategoryTitle({ title, id }) {
  let iconName;

  if (id === "1") {
    iconName = "IconCategoryWeb";
  } else if (id === "2") {
    iconName = "IconCategorySoftware";
  } else if (id === "3") {
    iconName = "IconCategoryDesign";
  } else {
    iconName = "IconCategoryMarketing";
  }

  return (
    <span className="category_title">
      <Icon icon={iconName} color="var(--icon-color)" extClassName="category_icon" />
      {title}
    </span>
  );
}

CategoryTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
