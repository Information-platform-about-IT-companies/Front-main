import "./CategoryTitle.scss";
import PropTypes from "prop-types";
import Icon from "UI-KIT/Icons";

export function CategoryTitle({ title, icon }) {
  return (
    <span className="category_title">
      <Icon icon={icon} color="var(--icon-color)" extClassName="category_icon" />
      {title}
    </span>
  );
}

CategoryTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
