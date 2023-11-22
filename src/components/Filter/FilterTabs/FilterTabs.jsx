import "./FilterTabs.scss";
import IconFilter from "UI-KIT/Icons/IconFilter";

import { Tab } from "./FilterTab/FilterTab";

export function FilterTabs({
  activeForm,
  setActiveForm,
  checkedValues,
  setIsOpenFilter,
  isOpenFilter,
}) {
  const tabsValues = Object.entries(checkedValues);

  const onClick = () => {
    setIsOpenFilter((prevState) => !prevState);
  };

  return (
    <div className="filter__tabs-container">
      <div className="filter__tabs">
        {tabsValues.map((value) => {
          const countChecked = Object.values(value[1]).filter((checked) => checked === true).length;

          return (
            <Tab
              key={value[0]}
              isOpenFilter={isOpenFilter}
              setIsOpenFilter={setIsOpenFilter}
              activeForm={activeForm}
              setActiveForm={setActiveForm}
              count={countChecked || ""}
              value={value[0]}
            />
          );
        })}
      </div>

      <button onClick={onClick} className="filter__tabs-button">
        <IconFilter size="32" color="var(--icon-color)" />
      </button>
    </div>
  );
}
