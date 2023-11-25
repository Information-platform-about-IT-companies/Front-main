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
  onBlur,
  children,
  ...props
}) {
  function errorStyle() {
    return error ? "input__field-error" : "";
  }

  function errorShow() {
    return error ? "input__error-text_show" : "";
  }

  function inputWithIconStyle() {
    return icon ? "input__field_icon" : "";
  }

  const inputField = (
    <input
      type={type}
      name={name}
      id={id}
      data-testid="input"
      className={`input__field ${errorStyle()} ${inputWithIconStyle()} ${extClassNameInput}`}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
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
            {children}
          </div>
          <span className={`input__error-text ${errorShow()}`} data-testid="inputError">
            {error}
          </span>
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
  onBlur: PropTypes.func,
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
  value: undefined,
  error: null,
  onlyInput: false,
  onBlur: () => {},
};
