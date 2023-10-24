import "./Label.scss";
import PropTypes from "prop-types";

export function Label({ title, extClassName }) {
  return <span className={`label ${extClassName}`}>{title}</span>;
}

Label.propTypes = {
  title: PropTypes.string.isRequired,
  extClassName: PropTypes.string,
};

Label.defaultProps = {
  extClassName: null,
};
