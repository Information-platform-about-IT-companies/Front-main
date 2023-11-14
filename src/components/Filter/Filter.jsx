import { useEffect, useState } from "react";
import { getCategories } from "mocks/services/categoryController";
import { getCities } from "mocks/services/cityController";
import { LoadingStatus } from "services/constants";
import { FilterTabs } from "./FilterTabs/FilterTabs";
import { FilterNav } from "./FilterNav/FilterNav";
import { ServiceForm } from "./FilterForms/ServiceForm/ServiceForm";
import { CityForm } from "./FilterForms/CityForm/CityForm";
import "./Filter.scss";

export function Filter() {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [activeForm, setActiveForm] = useState("cities");
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.idle);

  useEffect(() => {
    const fetchData = async () => {
      const citiesPromise = getCities();
      const servicesPromise = getCategories();
      const response = await Promise.all([citiesPromise, servicesPromise]);
      setCities(response[0]);
      setCategories(response[1]);
      setLoadingStatus(LoadingStatus.succeeded);
    };

    setLoadingStatus(LoadingStatus.loading);
    // TODO обработка ошибок загрузки компаний
    fetchData().catch(console.error);
  }, []);

  /* Здесь будет обработка загрузки данных, пока набросаю комментарий, чтобы не забыть

  if (isError && allServices.length === 0 && cities.length === 0) {
      return <ErrorMessage />
    }
  */

  const ActiveFilterForm =
    activeForm === "services" ? (
      <ServiceForm categories={categories} setIsOpenFilter={setIsOpenFilter} />
    ) : (
      <CityForm cities={cities} setIsOpenFilter={setIsOpenFilter} />
    );

  return (
    <section className={isOpenFilter ? "filter filter_open" : "filter"}>
      <FilterTabs
        activeForm={activeForm}
        isOpenFilter={isOpenFilter}
        setActiveForm={setActiveForm}
        setIsOpenFilter={setIsOpenFilter}
      />

      {isOpenFilter && (
        <div className="filter__content">
          <FilterNav activeForm={activeForm} setActiveForm={setActiveForm} />
          {loadingStatus === LoadingStatus.loading ? (
            <div>
              <div style={{ paddingTop: "20px", width: "200px", margin: "0 auto" }}>
                <img
                  decoding="async"
                  alt="spinner"
                  src="https://gderadost.ru/catalog/view/theme/default/img/lazy-img.gif?is-pending-load=1"
                />
                Здесь крутится спиннер
              </div>
            </div>
          ) : (
            ActiveFilterForm
          )}
        </div>
      )}
    </section>
  );
}
