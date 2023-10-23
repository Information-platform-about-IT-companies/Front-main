import "./Input.scss";
import PropTypes from "prop-types";

function Input({
  lable,
  extClassNameLable,
  type,
  name,
  id,
  onChange,
  extClassNameInput,
  required,
  placeholder,
  error,
  ...props
}) {
  return (
    <>
      <lable className={`lable ${extClassNameLable}`} htmlFor={id}>
        ${lable}
      </lable>
      <input
        type={type}
        name={name}
        id={id}
        className={`input ${extClassNameInput}`}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
      <span className="input__error">${error}</span>
    </>
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
  error: PropTypes.string,
};

Input.defaultProps = {
  lable: null,
  extClassNameLable: null,
  type: "text",
  extClassNameInput: null,
  required: false,
  placeholder: "",
  error: null,
};

export default Input;
