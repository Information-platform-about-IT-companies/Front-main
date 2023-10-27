import PropTypes from "prop-types";

export default function IconBullet({ size, color, extClassName }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={extClassName}
    >
      <circle cx="12" cy="12" r="2" fill={color} />
    </svg>
  );
}

IconBullet.propTypes = {
  size: PropTypes.oneOf(["24", "32", "60"]),
  color: PropTypes.string.isRequired,
  extClassName: PropTypes.string,
};

IconBullet.defaultProps = {
  size: "32",
  extClassName: null,
};
