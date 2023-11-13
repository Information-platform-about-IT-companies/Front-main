import "./FilterNavItem.scss";
import IconArrow from "UI-KIT/Icons/IconArrow";

export function FilterNavItem({ value, activeForm, setActiveForm }) {
  const color = activeForm === value ? "#4E4CBF" : "#111111";
  const className = activeForm === value ? "filter__nav-item_active" : "";
  const itemName = value === "cities" ? "Город" : "Услуги";

  return (
    <button className={`filter__nav-item ${className}`} onClick={() => setActiveForm(value)}>
      {itemName}
      <IconArrow size="24" direction="right" color={color} />
    </button>
  );
}
