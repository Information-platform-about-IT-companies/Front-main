import { useSearchParams } from "react-router-dom";
import ButtonIcon from "UI-KIT/ButtonIcon/ButtonIcon";
import IconFilter from "UI-KIT/Icons/IconFilter";
import { Tab } from "./FilterTab/FilterTab";
import "./FilterTabs.scss";

export function FilterTabs({ activeForm, setActiveForm, setIsOpenFilter, isOpenFilter }) {
  const [searchParams] = useSearchParams();
  const cities = JSON.parse(searchParams.get("cities"));
  const services = JSON.parse(searchParams.get("services"));
  const tabsValues = { cities, services };
  const onClick = () => {
    setIsOpenFilter((prevState) => !prevState);
  };

  return (
    <div className="filter__tabs-container">
      <div className="filter__tabs">
        {Object.entries(tabsValues).map(([key, value]) => (
          <Tab
            key={key}
            isOpenFilter={isOpenFilter}
            setIsOpenFilter={setIsOpenFilter}
            activeForm={activeForm}
            setActiveForm={setActiveForm}
            count={value?.length || ""}
            value={key}
          />
        ))}
      </div>
      <ButtonIcon
        onClick={onClick}
        icon={<IconFilter cross={isOpenFilter} size="32" color="#4E4CBF" />}
      />
    </div>
  );
}
