import { Link } from "react-router-dom";

import "./Breadcrumbs.scss";
import PropTypes from "prop-types";

export default function Breadcrumbs(props) {
  const { main, services, city, company } = props;

  return (
    <ul className="breadcrumbs">
      <li className="breadcrumbs__element">
        <Link to={main.link} className="breadcrumbs__link">
          {main.name}
        </Link>
      </li>
      <li className="breadcrumbs__element">
        <Link to={services.link} className="breadcrumbs__link">
          {services.name}
        </Link>
      </li>
      <li className="breadcrumbs__element">
        <Link to={city.link} className="breadcrumbs__link">
          {city.name}
        </Link>
      </li>
      <li className="breadcrumbs__element">
        <Link to={company.link} className="breadcrumbs__link">
          {company.name}
        </Link>
      </li>
    </ul>
  );
}

Breadcrumbs.propTypes = {
  main: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  services: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  city: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  company: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};
