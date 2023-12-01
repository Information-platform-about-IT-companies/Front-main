// components
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import { Filter } from "components/Filter/Filter";
import { CompanyList } from "components/CompanyList/CompanyList";
import { Loader } from "components/Loader/Loader";
import { useFetchCompanies } from "hooks/useFetchCompanies";
// functions
import { LoadingStatus } from "services/constants";
// styles
import "./FilterPage.scss";

function FilterPage() {
  const [state, { updateCompany }] = useFetchCompanies("cities", "services", "page");
  return (
    <main className="filterPage">
      <div className="filterPage__intro">
        <Breadcrumbs />
        {!state.companies && (
          <div className="filterPage__no-results">
            <div className="filterPage__no-results-image" />
            <h2 className="filterPage__title">По вашему запросу ничего не найдено</h2>
            <span className="filterPage__subtitle">Попробуйте поискать по другим критериям</span>
          </div>
        )}
        {/* тут вывод компаний по всем городам по этой услуге, если не найдено в этом городе */}
        <h1 className="filterPage__title">Изучите лучшие компании России</h1>
        <Filter />
      </div>
      {state.loadingStatus === LoadingStatus.loading && <Loader />}
      <CompanyList
        className="filterPage__list"
        type="filterCard"
        companies={state.companies}
        totalPages={state.totalPages}
        onCompanyUpdate={updateCompany}
      />
    </main>
  );
}

export default FilterPage;
