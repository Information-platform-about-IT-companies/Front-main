import PropTypes from "prop-types";
import { FilterNavItem } from "./FilterNavItem/FilterNavItem";
import "./FilterNav.scss";

export function FilterNav({ activeForm, dispatch }) {
  return (
    <nav className="filter__nav">
      {["city", "service"].map((value) => (
        <FilterNavItem key={value} formName={value} activeForm={activeForm} dispatch={dispatch} />
      ))}
    </nav>
  );
}

FilterNav.propTypes = {
  activeForm: PropTypes.oneOf(["city", "service"]).isRequired,
  dispatch: PropTypes.func.isRequired,
};
