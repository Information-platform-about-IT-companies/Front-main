import "./Label.scss";
import PropTypes from "prop-types";

export function Label({ children, extClassName, ...props }) {
  return (
    <div className={`label ${extClassName}`} {...props}>
      <p className="label_title">{children}</p>
    </div>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  extClassName: PropTypes.string,
};

Label.defaultProps = {
  extClassName: null,
};
