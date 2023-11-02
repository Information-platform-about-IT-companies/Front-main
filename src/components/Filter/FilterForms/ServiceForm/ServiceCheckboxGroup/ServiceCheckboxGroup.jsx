import { Checkbox } from "UI-KIT/Checkbox/Checkbox";
import { useCallback } from "react";
import "./ServiceCheckboxGroup.scss";

export function ServiceCheckboxGroup({ title, services, setChekedValues, checkedValues }) {
  const checkedServices = checkedValues["Услуги"];

  const onChange = useCallback(
    (e) => {
      const { checked, name } = e.target;
      setChekedValues((lastValues) => ({
        ...lastValues,
        ["Услуги"]: { ...lastValues["Услуги"], [name]: checked },
      }));
    },
    [checkedValues],
  );

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
