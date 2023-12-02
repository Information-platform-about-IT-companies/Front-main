import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import "./Button.scss";

export function Button({ size, fill, title, linkType, url, onClick, extClassName, ...props }) {
  if (url) {
    const isLink = linkType === "link";
    const isNavLink = linkType === "navlink";
    const link = isLink && (
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

    const navlink = isNavLink && (
      <NavLink
        to={url}
        className={
          fill
            ? `button button_style_fill button_size_${size} ${extClassName}`
            : `button button_style_light_bg button_size_${size} ${extClassName}`
        }
        {...props}
      >
        {title}
      </NavLink>
    );
    return isLink ? link : navlink;
  }
  return (
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
}

Button.propTypes = {
  linkType: PropTypes.string,
  url: PropTypes.string,
  size: PropTypes.string.isRequired,
  fill: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  extClassName: PropTypes.string,
};

Button.defaultProps = {
  linkType: null,
  onClick: null,
  url: null,
  fill: false,
  extClassName: "",
};
