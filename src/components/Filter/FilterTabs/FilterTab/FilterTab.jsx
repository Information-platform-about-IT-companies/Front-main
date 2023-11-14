import "./FilterTab.scss";
import IconArrow from "UI-KIT/Icons/IconArrow";

export function Tab({ value, count, activeForm, isOpenFilter, setActiveForm, setIsOpenFilter }) {
  const iconDirection = activeForm === value && isOpenFilter ? "up" : "down";
  const tabName = value === "cities" ? "Город" : "Услуги";

  const onClick = () => {
    if (activeForm === value) {
      setIsOpenFilter((prevState) => !prevState);
    }

    if (activeForm !== value && isOpenFilter) {
      setActiveForm(value);
    }

    if (activeForm !== value && !isOpenFilter) {
      setIsOpenFilter((prevState) => !prevState);
      setActiveForm(value);
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClick();
    }
  };

  return (
    <div className="filter__tab" role="button" tabIndex={0} onClick={onClick} onKeyDown={onKeyDown}>
      <span>{tabName}</span>
      {count && <span className="filter__tab-count">{`(${count})`}</span>}
      <IconArrow size="24" color="#111111" direction={iconDirection} />
    </div>
  );
}
