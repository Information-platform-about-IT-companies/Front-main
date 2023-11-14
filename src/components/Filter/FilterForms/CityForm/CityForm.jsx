/* eslint-disable no-debugger */
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { modifyArray } from "services/constants";
import { Checkbox } from "UI-KIT/Checkbox/Checkbox";
import { Button } from "UI-KIT/Button/Button";
import "./CityForm.scss";

export function CityForm({ cities, setIsOpenFilter }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const checkedSites = JSON.parse(searchParams.get("cities")) || [];
  const [checkedItems, setCheckedItems] = useState(checkedSites);

  const onChange = (e) => {
    const { checked, id } = e.target;
    setCheckedItems((items) => modifyArray(items, { [id]: checked }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (checkedItems?.length > 0) {
      searchParams.set("cities", JSON.stringify(checkedItems));
    } else {
      searchParams.delete("cities");
    }
    searchParams.delete("page");
    setSearchParams(searchParams);
    setIsOpenFilter(false);
  };

  return (
    <form name="cities" className="filter__city-form city-form" onSubmit={onSubmit}>
      <div className="city-form__checkboxes">
        {cities.map(({ id, name }) => (
          <Checkbox
            key={id}
            onChange={onChange}
            title={name}
            name={name}
            id={id}
            defaultChecked={checkedSites.includes(id)}
          />
        ))}
      </div>

      <Button
        extClassName="city-form__button"
        type="submit"
        size="standart"
        onClick={onSubmit}
        title="Применить фильтры"
        fill
      />
    </form>
  );
}
