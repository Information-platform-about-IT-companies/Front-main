import { Tab } from "./FilterTab/FilterTab";

import "./FilterTabs.scss";

export function FilterTabs({ activeForm, setActiveForm }) {
  const tabsValues = [
    { count: 2, value: "Город" },
    { count: 4, value: "Услуги" },
  ];

  return (
    <div className="filter__tabs">
      {tabsValues.map(({ count, value }) => (
        <Tab
          setActiveForm={setActiveForm}
          key={value}
          activeForm={activeForm}
          count={count}
          value={value}
        />
      ))}
    </div>
  );
}
