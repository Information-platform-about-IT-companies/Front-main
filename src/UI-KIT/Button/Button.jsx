import "./Button.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Button({ url, size, fill, title, onClick, extClassName, ...props }) {
  const button = (
    <button
      onClick={onClick}
      className={
        fill
          ? `button button_style_fill button_size_${size} ${extClassName}`
          : `button button_style_outline button_size_${size} ${extClassName}`
      }
      {...props}
    >
      {title}
    </button>
  );
  const link = (
    <Link
      to={url}
      className={
        fill
          ? `button button_style_fill button_size_${size} ${extClassName}`
          : `button button_style_outline button_size_${size} ${extClassName}`
      }
      {...props}
    >
      {title}
    </Link>
  );

  return url ? link : button;
}

Button.propTypes = {
  url: PropTypes.string,
  size: PropTypes.string.isRequired,
  fill: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  extClassName: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  url: null,
  extClassName: null,
};
