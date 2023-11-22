import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LoadingStatus } from "services/constants";
// components
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import { Filter } from "components/Filter/Filter";
import CompanyCard from "components/CompanyCard/CompanyCard";
import { companyAPI } from "api/companyAPI";
import { Pagination } from "components/Pagination/Pagination";
import "./FilterPage.scss";

function FilterPage() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;

  const [companies, setCompanies] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.idle);

  useEffect(() => {
    const filterCities = JSON.parse(searchParams.get("cities"));
    const filterServices = JSON.parse(searchParams.get("services"));

    const fetchData = async () => {
      const query = [
        ...(page !== 1 ? [["page", 2]] : []),
        ...(filterCities ? filterCities.map((id) => ["city", id]) : []),
        ...(filterServices ? filterServices.map((id) => ["services", id]) : []),
      ];
      try {
        const response = await companyAPI.fetchCompanies(query);
        setCompanies(response.results);
        setTotalPages(response.total_pages);
        setLoadingStatus(LoadingStatus.succeeded);
      } catch (error) {
        console.error(error);
      }
    };
    setLoadingStatus(LoadingStatus.loading);

    fetchData();
  }, [searchParams]);

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
          companies.map(({ id, services, name, description, isFavorited }) => (
            // eslint-disable-next-line react/no-unknown-property
            <li
              key={id}
              className="filterPage__listitem"
              data-favorited={JSON.stringify(isFavorited)}
            >
              <CompanyCard
                type="filterCard"
                key={id}
                id={id}
                services={services}
                name={name}
                {...(isFavorited ? { inFavorite: true } : {})}
                description={description}
              />
            </li>
          ))}
      </ul>
      <div>
        <Pagination totalPages={totalPages} currentPage={Number(page)} />
      </div>
    </main>
  );
}

export default FilterPage;
