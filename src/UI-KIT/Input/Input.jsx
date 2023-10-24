import "./Input.scss";
import PropTypes from "prop-types";

export function Input({
  lable,
  extClassNameLable,
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

  return (
    <div className="input">
      <lable className={`input__lable ${extClassNameLable}`} htmlFor={id}>
        {lable}
      </lable>
      <input
        type={type}
        name={name}
        id={id}
        className={`input__field ${extClassNameInput} ${errorStyle()}`}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...props}
      />
      <span className="input__error-text">{error}</span>
    </div>
  );
}

Input.propTypes = {
  lable: PropTypes.string,
  extClassNameLable: PropTypes.string,
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
  lable: null,
  extClassNameLable: null,
  type: "text",
  extClassNameInput: null,
  required: false,
  placeholder: "",
  value: null,
  error: null,
};
