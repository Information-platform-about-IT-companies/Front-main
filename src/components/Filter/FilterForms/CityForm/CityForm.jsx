import { useCallback } from "react";
import "./CityForm.scss";

import { Checkbox } from "UI-KIT/Checkbox/Checkbox";
import { Button } from "UI-KIT/Button/Button";

export function CityForm({ cities, checkedValues, setChekedValues, onSubmit }) {
  const checkedCities = checkedValues["Город"];

  const onChange = useCallback(
    (e) => {
      const { checked, name } = e.target;
      setChekedValues((lastValues) => ({
        ...lastValues,
        ["Город"]: { ...lastValues["Город"], [name]: checked },
      }));
    },
    [checkedValues],
  );

  return (
    <form name="Город" className="filter__city-form city-form" onSubmit={onSubmit}>
      <div className="city-form__checkboxes">
        {cities.map((city) => (
          <Checkbox
            key={city}
            onChange={onChange}
            title={city}
            name={city}
            id={city}
            checked={!!checkedCities[city]}
          />
        ))}
      </div>

      <Button
        extClassName="city-form__button"
        type="submit"
        size="standart"
        onClick={onSubmit}
        title="Применить фильтры"
        fill={true}
      />
    </form>
  );
}
