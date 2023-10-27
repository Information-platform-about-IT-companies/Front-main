import "./Input.scss";
import PropTypes from "prop-types";

function Input({
  label,
  icon,
  extClassNameLabel,
  type,
  name,
  id,
  onChange,
  value,
  extClassNameInput,
  required,
  placeholder,
  error,
  ...props
}) {
  function errorStyle() {
    return error ? "input__field-error" : "";
  }

  function inputWithIconStyle() {
    return icon ? "input__field_icon" : "";
  }

  return (
    <div className="input">
      <label className={`input__label ${extClassNameLabel}`} htmlFor={id}>
        {label}
      </label>
      <div className="input__container">
        <div className="input__field-icon">{icon}</div>
        <input
          type={type}
          name={name}
          id={id}
          className={`input__field ${extClassNameInput} ${errorStyle()} ${inputWithIconStyle()}`}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...props}
        />
      </div>
      <span className="input__error-text">{error}</span>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  extClassNameLabel: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  extClassNameInput: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  icon: null,
  extClassNameLabel: null,
  type: "text",
  extClassNameInput: null,
  required: false,
  placeholder: "",
  value: null,
  error: null,
};
