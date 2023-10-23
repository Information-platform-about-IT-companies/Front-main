import { useState } from "react";
import "./Checkbox.scss";
import PropTypes from "prop-types";

export function Checkbox({ title, name, id }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  }

  return (
    <label className="checkbox" htmlFor="checkbox">
      <input
        className="checkbox_input"
        type="checkbox"
        name={name}
        id={id}
        checked={isChecked}
        onChange={() => handleChange()}
      />
      {title}
    </label>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
