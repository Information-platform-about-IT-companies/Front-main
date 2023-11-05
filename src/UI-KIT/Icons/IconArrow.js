import PropTypes from "prop-types";

export default function IconArrow({ size, color, extClassName, direction }) {
  let angle;
  switch (direction) {
    case "up":
      angle = 0;
      break;
    case "right":
      angle = 90;
      break;
    case "down":
      angle = 180;
      break;
    case "left":
      angle = 270;
      break;
    default:
      angle = 0;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={extClassName}
    >
      <path
        d="m 15.529297,13.029297 -5,5 a 0.66666502,0.66666502 0 0 0 0,0.941406 0.66666502,0.66666502 0 0 0 0.941406,0 L 16,14.441406 l 4.529297,4.529297 a 0.66666502,0.66666502 0 0 0 0.941406,0 0.66666502,0.66666502 0 0 0 0,-0.941406 l -5,-5 a 0.66673168,0.66673168 0 0 0 -0.941406,0 z"
        fill={color}
        transform={`rotate(${angle} 16 16)`}
      />
    </svg>
  );
}

IconArrow.propTypes = {
  size: PropTypes.oneOf(["24", "32", "60"]),
  color: PropTypes.string,
  direction: PropTypes.oneOf(["up", "left", "down", "right"]),
  extClassName: PropTypes.string,
};

IconArrow.defaultProps = {
  size: "32",
  color: "#111",
  direction: "up",
  extClassName: null,
};
