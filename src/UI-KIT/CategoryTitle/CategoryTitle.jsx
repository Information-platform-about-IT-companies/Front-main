import "./CategoryTitle.scss";
import PropTypes from "prop-types";

export function CategoryTitle({ title, icon, children }) {
  return (
    <ul className="category">
      {icon}
      {title}
      {children}
    </ul>
  );
}

CategoryTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node,
};

CategoryTitle.defaultProps = {
  children: null,
};
