import "./Label.scss";
import PropTypes from "prop-types";

export function Label({ title, extClassName, tooltip }) {
  return (
    <span className={`label ${extClassName}`} data-tooltip={tooltip}>
      {title}
    </span>
  );
}

Label.propTypes = {
  title: PropTypes.string.isRequired,
  extClassName: PropTypes.string,
  tooltip: PropTypes.string,
};

Label.defaultProps = {
  extClassName: "",
  tooltip: "",
};
