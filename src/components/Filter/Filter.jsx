import PropTypes from "prop-types";

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { infoAPI } from "api/infoApi";
import { LoadingStatus } from "services/constants";
// components
import { Loader } from "components/Loader/Loader";
import { FilterTabs } from "./FilterTabs/FilterTabs";
import { FilterNav } from "./FilterNav/FilterNav";
import { ServiceForm } from "./FilterForms/ServiceForm/ServiceForm";
import { CityForm } from "./FilterForms/CityForm/CityForm";
// styles
import "./Filter.scss";

export function Filter({ state, dispatch }) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const citiesPromise = infoAPI.fetchCities();
      const servicesPromise = infoAPI.fetchServiceCategories();
      const response = await Promise.all([citiesPromise, servicesPromise]);
      dispatch({ type: "FETCH_CITIES", payload: response[0] });
      dispatch({ type: "FETCH_CATEGORIES", payload: response[1] });
      dispatch({ type: "CHANGE_LOADING_STATUS", payload: LoadingStatus.succeeded });
    };

    const filters = [
      JSON.parse(searchParams.get("cities")) ?? [],
      JSON.parse(searchParams.get("services")) ?? [],
    ];

    dispatch({ type: "SET_FILTERS", payload: filters });
    dispatch({ type: "CHANGE_LOADING_STATUS", payload: LoadingStatus.loading });
    fetchData().catch((e) => {
      dispatch({ type: "CHANGE_LOADING_STATUS", payload: LoadingStatus.failed });
      dispatch({ type: "SET_LOADING_ERROR", payload: e });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const { isOpenFilter, loadingStatus, checkedCities, checkedServices } = state;

  const onSubmit = (e) => {
    e.preventDefault();
    Object.entries({ cities: checkedCities, services: checkedServices, page: [] }).forEach(
      ([key, array]) => {
        searchParams.delete(key);
        if (array?.length) {
          searchParams.set(key, JSON.stringify(array));
        }
      },
    );

    setSearchParams(searchParams);
    dispatch({ type: "TOGGLE_FORM", payload: false });
  };

  const ActiveFilterForm =
    state.activeForm === "service" ? (
      <ServiceForm state={state} dispatch={dispatch} onSubmit={onSubmit} />
    ) : (
      <CityForm state={state} dispatch={dispatch} onSubmit={onSubmit} />
    );

  return (
    <section className={isOpenFilter ? "filter filter_open" : "filter"} data-testid="filterSection">
      <FilterTabs state={state} dispatch={dispatch} />

      {isOpenFilter && (
        <div className="filter__content">
          <FilterNav activeForm={state.activeForm} dispatch={dispatch} />
          {loadingStatus === LoadingStatus.loading ? <Loader /> : ActiveFilterForm}
        </div>
      )}
    </section>
  );
}

Filter.propTypes = {
  state: PropTypes.shape({
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        services: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
          }).isRequired,
        ),
      }),
    ),
    checkedServices: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
