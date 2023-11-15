import { useEffect } from "react";
import ButtonIcon from "UI-KIT/ButtonIcon/ButtonIcon";
import IconFilter from "UI-KIT/Icons/IconFilter";
import { Tab } from "./FilterTab/FilterTab";
import "./FilterTabs.scss";

export function FilterTabs({ state, dispatch }) {
  const {
    checkedCities: cities,
    checkedServices: services,
    forms,
    activeForm,
    isOpenFilter,
  } = state;
  const tabsValues = { city: cities?.length, service: services.length };
  const color = isOpenFilter ? "#4E4CBF" : "#111111";
  const isFilterNotEmpty = cities?.length || services?.length;

  const onTabClick = (formName) => {
    if (activeForm === formName) {
      dispatch({ type: "TOGGLE_FORM" });
    }

    if (activeForm !== formName && isOpenFilter) {
      dispatch({ type: "CHANGE_ACTIVE_FORM", payload: formName });
    }

    if (activeForm !== formName && !isOpenFilter) {
      dispatch({ type: "TOGGLE_FORM" });
      dispatch({ type: "CHANGE_ACTIVE_FORM", payload: formName });
    }
  };

  const clearFilter = () => {
    dispatch({ type: "RESET_CITIES" });
    dispatch({ type: "RESET_SERVICES" });
    dispatch({ type: "TOGGLE_FORM" });
  };

  return (
    <div className="filter__tabs-container">
      <div className="filter__tabs">
        {Object.entries(tabsValues).map(([formName, length]) => (
          <Tab
            key={formName}
            onClick={onTabClick}
            formName={formName}
            tabName={forms[formName]}
            total={length}
            direction={activeForm === formName && isOpenFilter ? "up" : "down"}
          />
        ))}
      </div>
      <ButtonIcon
        onClick={clearFilter}
        icon={<IconFilter {...(isFilterNotEmpty ? { cross: true } : {})} size="32" color={color} />}
      />
    </div>
  );
}
