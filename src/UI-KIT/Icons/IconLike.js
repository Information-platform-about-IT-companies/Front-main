import PropTypes from "prop-types";
import "./style.scss";

export default function IconLike({ size, color, state, onClick, extClassName }) {
  const isPressed = state;
  return isPressed ? (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`like-icon ${extClassName}`}
      onClick={onClick}
    >
      <path
        d="M24.0001 36.4573L11.3829 25.0288C4.52578 18.1716 14.6058 5.0059 24.0001 15.6573C33.3944 5.0059 43.4286 18.2173 36.6172 25.0288L24.0001 36.4573Z"
        fill="#FF9091"
        stroke="#FF9091"
        strokeWidth="1.71429"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`like-icon ${extClassName}`}
      onClick={onClick}
    >
      <path
        d="M33.3366 28.0003L36.6172 25.0288C43.4286 18.2173 33.3944 5.0059 24.0001 15.6573C14.6058 5.0059 4.52578 18.1716 11.3829 25.0288L24.0001 36.4573L28 32.667"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

IconLike.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  extClassName: PropTypes.string,
};

IconLike.defaultProps = {
  size: "48",
  color: "#414040",
  extClassName: "",
};
