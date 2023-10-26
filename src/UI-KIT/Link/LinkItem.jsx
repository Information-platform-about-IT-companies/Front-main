import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./LinkItem.scss";

export function LinkItem({ url, title }) {
  return (
    <Link className="link" to={url}>
      {title}
    </Link>
  );
}

LinkItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
