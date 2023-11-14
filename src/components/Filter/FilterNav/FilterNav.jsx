import { FilterNavItem } from "./FilterNavItem/FilterNavItem";
import "./FilterNav.scss";

export function FilterNav({ activeForm, setActiveForm }) {
  return (
    <nav className="filter__nav">
      {["cities", "services"].map((value) => (
        <FilterNavItem
          key={value}
          value={value}
          activeForm={activeForm}
          setActiveForm={setActiveForm}
        />
      ))}
    </nav>
  );
}
