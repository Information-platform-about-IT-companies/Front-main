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
