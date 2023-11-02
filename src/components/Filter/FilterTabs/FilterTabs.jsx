import { Tab } from "./FilterTab/FilterTab";

import "./FilterTabs.scss";

export function FilterTabs({ activeForm, setActiveForm, checkedValues }) {
  const tabsValues = Object.entries(checkedValues);

  return (
    <div className="filter__tabs">
      {tabsValues.map((value) => {
        const countChecked = Object.values(value[1]).filter((checked) => checked === true).length;

        return (
          <Tab
            key={value[0]}
            setActiveForm={setActiveForm}
            activeForm={activeForm}
            count={countChecked || ""}
            value={value[0]}
          />
        );
      })}
    </div>
  );
}
