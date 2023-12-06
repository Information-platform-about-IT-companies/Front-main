import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
// functions
import { LoadingStatus } from "services/constants";
import { useFetchCompanies } from "hooks/useFetchCompanies";
import { reducer, initialState } from "store/reducers/filterReducer";
// UI-KIT
import { Button } from "UI-KIT/Button/Button";
// components
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import { Filter } from "components/Filter/Filter";
import { CompanyList } from "components/CompanyList/CompanyList";
import { Loader } from "components/Loader/Loader";
import FilterPageHeader from "./FilterPageHeader/FilterPageHeader";
// styles
import "./FilterPage.scss";

function FilterPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateFetch, { updateCompany }] = useFetchCompanies("cities", "services", "page");
  const navigate = useNavigate();

  return (
    <main className="filterPage">
      <div className="filterPage__intro">
        <Breadcrumbs state={state} dispatch={dispatch} />
        {stateFetch.loadingStatus === LoadingStatus.succeeded && !stateFetch.totalCompanies ? (
          <div className="filterPage__no-results">
            <div className="filterPage__no-results-image" />
            <h2 className="filterPage__title">По вашему запросу ничего не найдено</h2>
            <span className="filterPage__subtitle">Попробуйте поискать по другим критериям</span>
            <Button
              title="Назад"
              fill={false}
              size="standard"
              onClick={() => navigate(-1)}
              extClassName="filterPage__button-back"
            />
          </div>
        ) : (
          ""
        )}
        {stateFetch.totalCompanies ? (
          <>
            <FilterPageHeader filterInfo={state} companyInfo={stateFetch} />
            <Filter state={state} dispatch={dispatch} />
          </>
        ) : (
          ""
        )}
      </div>
      {stateFetch.loadingStatus === LoadingStatus.loading && <Loader />}
      {stateFetch.totalCompanies ? (
        <CompanyList
          className="filterPage__list"
          type="filterCard"
          companies={stateFetch.companies}
          totalPages={stateFetch.totalPages}
          onCompanyUpdate={updateCompany}
        />
      ) : (
        ""
      )}
    </main>
  );
}

export default FilterPage;
