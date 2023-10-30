import "./Button.scss";
import PropTypes from "prop-types";

export function Button({ type, size, fill, title, onClick, icon, extClassName, ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        fill
          ? `button button_style_fill button_size_${size} ${extClassName}`
          : `button button_style_outline button_size_${size} ${extClassName}`
      }
      {...props}
    >
      {/* {icon && <span>icon here</span>} */}
      {title}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string.isRequired,
  fill: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
  extClassName: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  icon: null,
  extClassName: null,
};
