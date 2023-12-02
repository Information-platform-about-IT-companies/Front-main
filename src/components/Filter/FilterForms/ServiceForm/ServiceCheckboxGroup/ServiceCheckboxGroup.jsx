import PropTypes from "prop-types";
import { Checkbox } from "UI-KIT/Checkbox/Checkbox";
import "./ServiceCheckboxGroup.scss";

export function ServiceCheckboxGroup({ title, services, checkedServices, onChange }) {
  return (
    <fieldset className="service-form__fieldset">
      <legend className="service-form__legend">{title}</legend>

      {services.map(({ id, name }) => (
        <Checkbox
          key={id}
          onChange={onChange}
          title={name}
          name={name}
          id={id}
          defaultChecked={checkedServices.includes(id)}
        />
      ))}
    </fieldset>
  );
}

ServiceCheckboxGroup.propTypes = {
  title: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  checkedServices: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
};
