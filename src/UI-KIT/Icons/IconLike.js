import PropTypes from "prop-types";

export default function IconLike({ size, color, extClassName }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={extClassName}
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
  extClassName: PropTypes.string,
};

IconLike.defaultProps = {
  size: "48",
  color: "#414040",
  extClassName: "",
};
