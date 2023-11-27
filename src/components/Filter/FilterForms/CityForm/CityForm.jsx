import PropTypes from "prop-types";
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

CityForm.propTypes = {
  state: PropTypes.shape({
    cities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    checkedCities: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
