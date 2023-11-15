import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LoadingStatus } from "services/constants";
// components
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import { Filter } from "components/Filter/Filter";
import CompanyCard from "components/CompanyCard/CompanyCard";
import { getCompanies } from "mocks/services/companyController";
import { Pagination } from "components/Pagination/Pagination";
import "./FilterPage.scss";

function FilterPage() {
  const onIconHeartClick = () => {
    console.log("функция добавления/удаления в БД");
  };

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;

  const [companies, setCompanies] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.idle);

  useEffect(() => {
    const filterCities = JSON.parse(searchParams.get("cities"));
    const filterServices = JSON.parse(searchParams.get("services"));

    const fetchData = async () => {
      const response = await getCompanies({
        page: Number(page),
        city: filterCities,
        service: filterServices,
      });
      setCompanies(response.results);
      setTotalPages(response.total_pages);
      setLoadingStatus(LoadingStatus.succeeded);
    };
    setLoadingStatus(LoadingStatus.loading);

    fetchData().catch(console.error);
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
          companies.map(({ id, services, name, description, is_favorited: isFavorited }) => (
            <li key={id} className="filterPage__listitem">
              <CompanyCard
                type="filterCard"
                key={id}
                services={services}
                name={name}
                iconLikeState={isFavorited}
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
