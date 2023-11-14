import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { modifyArray } from "services/constants";
import { Button } from "UI-KIT/Button/Button";
import { ServiceCheckboxGroup } from "components/Filter/FilterForms/ServiceForm/ServiceCheckboxGroup/ServiceCheckboxGroup";
import "./ServiceForm.scss";
import "../../Filter.scss";

export function ServiceForm({ categories, setIsOpenFilter }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const checkedServices = JSON.parse(searchParams.get("services")) || [];
  const [checkedItems, setCheckedItems] = useState(checkedServices);

  const onChange = (e) => {
    const { checked, id } = e.target;
    setCheckedItems((items) => modifyArray(items, { [id]: checked }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (checkedItems?.length > 0) {
      searchParams.set("services", JSON.stringify(checkedItems));
    } else {
      searchParams.delete("services");
    }
    searchParams.delete("page");
    setSearchParams(searchParams);
    setIsOpenFilter(false);
  };

  return (
    <form name="services" className="filter__service-form service-form" onSubmit={onSubmit}>
      <div className="service-form__checkboxes">
        {categories.map(({ id, name, services }) => (
          <ServiceCheckboxGroup
            key={id}
            title={name}
            services={services}
            onChange={onChange}
            checkedServices={checkedServices}
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
