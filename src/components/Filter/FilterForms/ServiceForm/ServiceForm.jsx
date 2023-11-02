import "./ServiceForm.scss";
import "../../Filter.scss";

import { Button } from "UI-KIT/Button/Button";
import { ServiceCheckboxGroup } from "components/Filter/FilterForms/ServiceForm/ServiceCheckboxGroup/ServiceCheckboxGroup";

export function ServiceForm({ allServices, checkedValues, setChekedValues, onSubmit }) {
  return (
    <form name="Услуги" className="filter__service-form service-form" onSubmit={onSubmit}>
      <div className="service-form__checkboxes">
        {allServices.map(({ id, category, services }) => (
          <ServiceCheckboxGroup
            key={id}
            title={category}
            services={services}
            checkedValues={checkedValues}
            setChekedValues={setChekedValues}
          />
        ))}
      </div>

      <Button
        extClassName="service-form__button"
        type="submit"
        size="standart"
        onClick={onSubmit}
        title="Применить фильтры"
        fill
      />
    </form>
  );
}
