// Components
import { CompanyList } from "components/CompanyList/CompanyList";
import CompanyCardFavouriteNone from "components/CompanyCardFavouriteNone/CompanyCardFavouriteNone";
import { Loader } from "components/Loader/Loader";
// functions
import { useFetchCompanies } from "hooks/useFetchCompanies";
import { LoadingStatus } from "services/constants";
// styles
import "./ProfileFavourite.scss";

function ProfileFavourite() {
  const [state, { updateCompany }] = useFetchCompanies("page", "isFavorited");

  return (
    <div className="profile_favourite">
      <h1 className="profile_title">Избранные компании</h1>
      {state.loadingStatus === LoadingStatus.loading && <Loader />}
      {state.loadingStatus === LoadingStatus.succeeded && state.companies.length ? (
        <CompanyList
          className="profile_favourite-cards"
          type="favoriteCard"
          companies={state.companies}
          totalPages={state.totalPages}
          onCompanyUpdate={updateCompany}
        />
      ) : (
        ""
      )}
      {state.loadingStatus === LoadingStatus.succeeded && !state.companies.length ? (
        <CompanyCardFavouriteNone />
      ) : (
        ""
      )}
    </div>
  );
}

export default ProfileFavourite;
