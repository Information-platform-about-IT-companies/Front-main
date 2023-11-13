import "./ButtonChanges.scss";
import PropTypes from "prop-types";

export function ButtonChanges({ title, onClick, extClassName, ...props }) {
  return (
    <button onClick={onClick} className={`button-changes ${extClassName}`} {...props}>
      {title}
    </button>
  );
}

ButtonChanges.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  extClassName: PropTypes.string,
};

ButtonChanges.defaultProps = {
  onClick: null,
  extClassName: "",
};
