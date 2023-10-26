import IconArrow from "UI-KIT/Icons/IconArrow";

import "./FilterNavItem.scss";

export function FilterNavItem({ value, activeForm, setActiveForm }) {
  const color = activeForm === value ? "#4E4CBF" : "#000000";
  const className = activeForm === value ? "filter__nav-item_active" : "";

  return (
    <button className={`filter__nav-item ${className}`} onClick={() => setActiveForm(value)}>
      {value}
      <IconArrow size="24" direction="right" color={color} />
    </button>
  );
}
