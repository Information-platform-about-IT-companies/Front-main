import "./Textarea.scss";
import PropTypes from "prop-types";

function Textarea({
  label,
  extClassNameLabel,
  name,
  id,
  onChange,
  value,
  extClassNameTextarea,
  required,
  placeholder,
  rows,
  error,
  ...props
}) {
  function errorStyle() {
    return error ? "textarea_field-error" : "";
  }

  return (
    <div className="textarea">
      <label className={`textarea_label ${extClassNameLabel}`} htmlFor={id}>
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        className={`textarea_field ${extClassNameTextarea} ${errorStyle()} `}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        rows={rows}
        {...props}
      />
      <span className="textarea_error-text">{error}</span>
    </div>
  );
}

export default Textarea;

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  extClassNameLabel: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  extClassNameTextarea: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  rows: PropTypes.string.isRequired,
  error: PropTypes.string,
};

Textarea.defaultProps = {
  extClassNameLabel: null,
  extClassNameTextarea: null,
  required: false,
  placeholder: "",
  value: null,
  error: null,
};
