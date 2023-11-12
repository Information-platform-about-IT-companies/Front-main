import "./ButtonIcon.scss";
import PropTypes from "prop-types";

export default function ButtonIcon({ icon, onClick, extClassName, ...props }) {
  return (
    <button onClick={onClick} className={`button ${extClassName}`} {...props}>
      {icon}
    </button>
  );
}

ButtonIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  extClassName: PropTypes.string,
};

ButtonIcon.defaultProps = {
  extClassName: "",
};
