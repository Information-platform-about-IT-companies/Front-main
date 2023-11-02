import IconArrow from "UI-KIT/Icons/IconArrow";

import "./FilterTab.scss";

export function Tab({ value, count, activeForm, setActiveForm }) {
  const iconDirection = activeForm === value ? "up" : "down";

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      setActiveForm(value);
    }
  }

  return (
    <div
      className="filter__tab"
      role="button"
      tabIndex={0}
      onClick={() => setActiveForm(value)}
      onKeyDown={handleKeyDown}
    >
      <span>{value}</span>
      {count && <span className="filter__tab-count">{`(${count})`}</span>}
      <IconArrow size="24" color="#111111" direction={iconDirection} />
    </div>
  );
}
