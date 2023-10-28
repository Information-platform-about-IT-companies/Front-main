import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./LinkItem.scss";

export function LinkItem({ url, title, withBullet, icon }) {
  return (
    <Link className={withBullet ? "link link_style_list" : "link"} to={url}>
      <div className="link__icon">{icon}</div>
      {title}
    </Link>
  );
}

LinkItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  withBullet: PropTypes.bool,
  icon: PropTypes.string,
};

LinkItem.defaultProps = {
  withBullet: false,
  icon: null,
};
