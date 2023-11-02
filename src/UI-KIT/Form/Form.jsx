import "./Form.scss";
import PropTypes from "prop-types";

export function Form({ children, onSubmit, extClassName, ...props }) {
  return (
    <form className={`form ${extClassName}`} onSubmit={onSubmit} {...props}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  extClassName: PropTypes.string,
};

Form.defaultProps = {
  extClassName: null,
};
