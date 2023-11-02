import "./FilterNav.scss";

import { FilterNavItem } from "./FilterNavItem/FilterNavItem";

export function FilterNav({ activeForm, setActiveForm, checkedValues }) {
  const navItemValues = Object.keys(checkedValues);

  return (
    <nav className="filter__nav">
      {navItemValues.map((value) => (
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
