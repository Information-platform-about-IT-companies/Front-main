/* eslint-disable camelcase */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "UI-KIT/Breadcrumbs/Breadcrumbs";
import { Filter } from "components/Filter/Filter";
import CompanyCard from "components/CompanyCard/CompanyCard";
import { getCompanies } from "mocks/services/companyController";
import "./FilterPage.scss";

const LoadingStatus = {
  idle: "idle",
  loading: "loading",
  succeeded: "succeeded",
  failed: "failed",
};

function FilterPage() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  const city = searchParams.get("city");
  const [companies, setCompanies] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.idle);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCompanies({ page: Number(page), city });
      setCompanies(response.results);
      setTotalPages(response.total_pages);
      setLoadingStatus(LoadingStatus.succeeded);
    };
    setLoadingStatus(LoadingStatus.loading);

    fetchData().catch(console.error);
  }, [page, city]);

  return (
    <main className="filterPage">
      <div className="filterPage__intro">
        <Breadcrumbs />
        <h1 className="filterPage__title">Изучите лучшие компании России</h1>
        <Filter />
      </div>
      {loadingStatus === LoadingStatus.loading && (
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
      )}
      <ul className="filterPage__list">
        {companies &&
          companies.map(({ services, name, description, is_favorited }) => (
            <li className="filterPage__listitem">
              <CompanyCard
                services={services && services.map((service) => service.name)}
                name={name}
                iconLikeState={is_favorited}
                description={description}
              />
            </li>
          ))}
      </ul>
      <div>тут будет пагинация</div>
    </main>
  );
}

export default FilterPage;
