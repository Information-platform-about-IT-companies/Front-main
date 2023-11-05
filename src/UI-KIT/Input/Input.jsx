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
  onlyInput,
  ...props
}) {
  function errorStyle() {
    return error ? "input__field-error" : "";
  }

  function inputWithIconStyle() {
    return icon ? "input__field_icon" : "";
  }

  const inputField = (
    <input
      type={type}
      name={name}
      id={id}
      className={`input__field ${errorStyle()} ${inputWithIconStyle()} ${extClassNameInput}`}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
    />
  );

  const inputIcon = <div className="input__field-icon">{icon}</div>;

  return (
    <div className="input">
      {onlyInput ? (
        <>
          {inputIcon}
          {inputField}
        </>
      ) : (
        <>
          <label className={`input__label ${extClassNameLabel}`} htmlFor={id}>
            {label}
          </label>
          <div className="input__container">
            {inputIcon}
            {inputField}
          </div>
          <span className="input__error-text">{error}</span>
        </>
      )}
    </div>
  );
}

export default Input;

Input.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
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
  onlyInput: PropTypes.bool,
};

Input.defaultProps = {
  label: null,
  icon: null,
  extClassNameLabel: "",
  type: "text",
  extClassNameInput: "",
  required: false,
  placeholder: "",
  value: null,
  error: null,
  onlyInput: false,
};
