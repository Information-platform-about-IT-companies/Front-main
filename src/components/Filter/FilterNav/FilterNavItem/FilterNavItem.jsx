import PropTypes from "prop-types";
import "./FilterNavItem.scss";
import IconArrow from "UI-KIT/Icons/IconArrow";

export function FilterNavItem({ formName, activeForm, dispatch }) {
  const color = activeForm === formName ? "#4E4CBF" : "#111111";
  const className = activeForm === formName ? "filter__nav-item_active" : "";
  const itemName = formName === "city" ? "Город" : "Услуги";

  return (
    <button
      className={`filter__nav-item ${className}`}
      onClick={() => dispatch({ type: "CHANGE_ACTIVE_FORM", payload: formName })}
    >
      {itemName}
      <IconArrow size="24" direction="right" color={color} />
    </button>
  );
}

FilterNavItem.propTypes = {
  formName: PropTypes.string.isRequired,
  activeForm: PropTypes.oneOf(["city", "service"]).isRequired,
  dispatch: PropTypes.func.isRequired,
};
