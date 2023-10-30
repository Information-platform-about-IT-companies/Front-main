import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./LinkItem.scss";

export function LinkItem({ url, title, withBullet }) {
  return (
    <Link className={withBullet ? "link link_style_list" : "link"} to={url}>
      {title}
    </Link>
  );
}

LinkItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  withBullet: PropTypes.bool,
};

LinkItem.defaultProps = {
  withBullet: false,
};
