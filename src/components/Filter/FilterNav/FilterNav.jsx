import "./FilterNav.scss";

import { FilterNavItem } from "./FilterNavItem/FilterNavItem";

export function FilterNav({ activeForm, setActiveForm }) {
  const navValues = ["Город", "Услуги"];

  return (
    <nav className="filter__nav">
      {navValues.map((value) => (
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
