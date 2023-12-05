import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
// функции
import findServiceById from "services/findServiceById";
// стили
import "./Breadcrumbs.scss";

export default function Breadcrumbs({ state, dispatch, company }) {
  const location = useLocation();

  let currentLink = "";
  let crumbs;
  const service = findServiceById(state?.categories, state?.checkedServices[0]);

  if (state) {
    switch (true) {
      case !state.checkedCities.length && !state.checkedServices.length:
        crumbs = (
          <li className="breadcrumbs__element" key="filter">
            <Link to="/filter" className="breadcrumbs__link">
              Все компании
            </Link>
          </li>
        );
        break;
      case state.checkedCities.length === 1 && !state.checkedServices.length:
        crumbs = (
          <li className="breadcrumbs__element" key="city">
            <Link to={`/filter?cities=[${state.checkedCities[0]}]`} className="breadcrumbs__link">
              {state.cities.find((city) => city.id === state.checkedCities[0])?.name}
            </Link>
          </li>
        );
        break;
      case !state.checkedCities.length && state.checkedServices.length === 1:
        crumbs = (
          <li className="breadcrumbs__element" key="service">
            <Link to={`/filter?services=[${service?.id}]`} className="breadcrumbs__link">
              {service?.name}
            </Link>
          </li>
        );
        break;
      case state.checkedCities.length === 1 && state.checkedServices.length === 1:
        crumbs = (
          <>
            <li className="breadcrumbs__element" key="city">
              <Link
                to={`/filter?cities=[${state.checkedCities[0]}]`}
                className="breadcrumbs__link"
                onClick={() => dispatch({ type: "RESET_SERVICES" })}
              >
                {state.cities.find((city) => city.id === state.checkedCities[0])?.name}
              </Link>
            </li>
            <li className="breadcrumbs__element" key="service">
              <Link to={`/filter?services=[${service?.id}]`} className="breadcrumbs__link">
                {service?.name}
              </Link>
            </li>
          </>
        );
        break;
      default:
        crumbs = (
          <li className="breadcrumbs__element" key="filter">
            <Link to="/filter" className="breadcrumbs__link">
              Компании
            </Link>
          </li>
        );
        break;
    }
  } else if (company) {
    crumbs = (
      <>
        <li className="breadcrumbs__element" key="city">
          <Link to={`/filter?cities=[${company.city.id}]`} className="breadcrumbs__link">
            {company.city.name}
          </Link>
        </li>
        <li className="breadcrumbs__element" key="company">
          <div className="breadcrumbs__link">{company.name}</div>
        </li>
      </>
    );
  } else {
    crumbs = location.pathname
      .split("/")
      .filter((crumb) => crumb !== "")
      .map((crumb) => {
        currentLink += `/${crumb}`;

        return (
          <li className="breadcrumbs__element" key={crumb}>
            <Link to={currentLink} className="breadcrumbs__link">
              {crumb}
            </Link>
          </li>
        );
      });
  }

  return (
    <ul className="breadcrumbs">
      <li className="breadcrumbs__element" key="main">
        <Link to="/" className="breadcrumbs__link">
          Главная
        </Link>
      </li>
      {crumbs}
    </ul>
  );
}

Breadcrumbs.propTypes = {
  state: PropTypes.shape({
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        services: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
          }).isRequired,
        ),
      }),
    ),
    checkedServices: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
  dispatch: PropTypes.func,
  company: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }),
};

Breadcrumbs.defaultProps = {
  state: null,
  dispatch: null,
  company: null,
};
