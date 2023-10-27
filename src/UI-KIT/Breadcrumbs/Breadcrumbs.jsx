import { Link, useLocation } from "react-router-dom";

import "./Breadcrumbs.scss";
import PropTypes from "prop-types";

export default function Breadcrumbs(props) {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = +`/${crumb}`;

      return (
        <ul className="breadcrumbs" key={crumb}>
          <li className="breadcrumbs__element">
            <Link to={currentLink} className="breadcrumbs__link">
              {crumb}
            </Link>
          </li>
        </ul>
      );
    });
}

Breadcrumbs.propTypes = {
  main: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};
