import "./Form.scss";
import PropTypes from "prop-types";

export function Form({ children, onSubmit, ...props }) {
  return (
    <form className="form" onSubmit={onSubmit} {...props}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
