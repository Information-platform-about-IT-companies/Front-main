import { Checkbox } from "UI-KIT/Checkbox/Checkbox";
import { Button } from "UI-KIT/Button/Button";
import "./CityForm.scss";

export function CityForm({ state: { cities, checkedCities }, dispatch, onSubmit }) {
  const onChange = (e) => {
    const { checked, id } = e.target;
    dispatch({ type: "CHANGE_CHECKED_CITIES", payload: { [id]: checked } });
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
            defaultChecked={checkedCities.includes(id)}
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
