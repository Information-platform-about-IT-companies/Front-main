import "./ServiceCheckboxGroup.scss";

import { Checkbox } from "UI-KIT/Checkbox/Checkbox";

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
