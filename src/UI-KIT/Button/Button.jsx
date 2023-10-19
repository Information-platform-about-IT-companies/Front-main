import "./Button.scss";
import PropTypes from "prop-types";

export function Button({ type, size, fill, children, onClick, style, icon, ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        fill
          ? `button button_style_fill button_size_${size}`
          : `button button_style_outline button_size_${size}`
      }
      style={style}
      {...props}
    >
      {/* {icon && <span>icon here</span>} */}
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string.isRequired,
  fill: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.string,
  icon: PropTypes.node,
};

Button.defaultProps = {
  type: "button",
  style: {},
  icon: null,
};
