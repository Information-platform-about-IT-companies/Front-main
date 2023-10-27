import "./CategoryTitle.scss";
import PropTypes from "prop-types";

export function CategoryTitle({ title, icon }) {
  return (
    <span className="category_title">
      {icon}
      {title}
    </span>
  );
}

CategoryTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
