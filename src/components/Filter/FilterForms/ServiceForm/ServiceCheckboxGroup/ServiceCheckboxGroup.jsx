import "./ServiceCheckboxGroup.scss";

import { Checkbox } from "UI-KIT/Checkbox/Checkbox";

export function ServiceCheckboxGroup({ title, services, setChekedValues, checkedValues }) {
  const checkedServices = checkedValues.services;

  const onChange = (e) => {
    const { checked, name } = e.target;
    setChekedValues((lastValues) => ({
      ...lastValues,
      services: { ...lastValues.services, [name]: checked },
    }));
  };

  return (
    <fieldset className="service-form__fieldset">
      <legend className="service-form__legend">{title}</legend>

      {services.map((service) => (
        <Checkbox
          key={service}
          onChange={onChange}
          title={service}
          name={service}
          id={service}
          checked={!!checkedServices[service]}
        />
      ))}
    </fieldset>
  );
}
