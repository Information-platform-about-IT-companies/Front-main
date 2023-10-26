import "./Checkbox.scss";
import PropTypes from "prop-types";

export function Checkbox({ title, name, id, onChange, ...props }) {
  return (
    <label className="checkbox" htmlFor="id">
      <input
        className="checkbox__input"
        type="checkbox"
        name={name}
        id={id}
        onChange={onChange}
        {...props}
      />
      {title}
    </label>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
