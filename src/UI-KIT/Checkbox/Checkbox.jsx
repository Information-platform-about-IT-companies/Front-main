import { useState } from "react";
import "./Checkbox.scss";
import PropTypes from "prop-types";

export function Checkbox({ title, value, onChange, ...props }) {
  const [isChecked, setisChecked] = useState(false);

  function handleChange(e) {
    setisChecked(!isChecked);
  }

  return (
    <label className="checkbox" htmlFor="checkbox">
      <input
        className="checkbox_input"
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={() => handleChange()}
      />
      {title}
    </label>
  );
}

Checkbox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
