import PropTypes from "prop-types";
import { Button } from "UI-KIT/Button/Button";
import { ServiceCheckboxGroup } from "components/Filter/FilterForms/ServiceForm/ServiceCheckboxGroup/ServiceCheckboxGroup";
import "./ServiceForm.scss";
import "../../Filter.scss";

export function ServiceForm({ state: { categories, checkedServices }, dispatch, onSubmit }) {
  const onChange = (e) => {
    const { checked, id } = e.target;
    dispatch({ type: "CHANGE_CHECKED_SERVICES", payload: { [id]: checked } });
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

ServiceForm.propTypes = {
  state: PropTypes.shape({
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        services: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }).isRequired,
      }),
    ),
    checkedServices: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
