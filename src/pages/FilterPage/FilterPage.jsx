import { LoadingStatus } from "services/constants";
// components
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import { Filter } from "components/Filter/Filter";
import { CompanyList } from "components/CompanyList/CompanyList";
import { Spinner } from "components/Spinner/Spinner";
import { useFetchCompanies } from "hooks/useFetchCompanies";

import "./FilterPage.scss";

function FilterPage() {
  const [state, { updateCompany }] = useFetchCompanies("cities", "services", "page");
  return (
    <main className="filterPage">
      <div className="filterPage__intro">
        <Breadcrumbs />
        <h1 className="filterPage__title">Изучите лучшие компании России</h1>
        <Filter />
      </div>
      {state.loadingStatus === LoadingStatus.loading && <Spinner />}
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
