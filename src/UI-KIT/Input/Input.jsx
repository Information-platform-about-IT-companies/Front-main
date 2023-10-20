import "./Input.scss";
import PropTypes from "prop-types";

function Input({
  lable,
  extClassNameLable,
  type,
  name,
  value,
  minLength,
  maxLength,
  extClassNameInput,
  required,
  placeholder,
  ...props
}) {
  return (
    <>
      <lable className={`lable ${extClassNameLable}`}>${lable}</lable>
      <input
        type={type}
        name={name}
        className={`input ${extClassNameInput}`}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </>
  );
}

Input.propTypes = {
  lable: PropTypes.string,
  extClassNameLable: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  extClassNameInput: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  lable: null,
  extClassNameLable: null,
  type: "text",
  value: null,
  minLength: null,
  maxLength: null,
  extClassNameInput: null,
  required: false,
  placeholder: "",
};

export default Input;
