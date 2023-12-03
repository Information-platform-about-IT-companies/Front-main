// Components
import { CompanyList } from "components/CompanyList/CompanyList";
import CompanyCardFavouriteNone from "components/CompanyCardFavouriteNone/CompanyCardFavouriteNone";
// functions
import { useFetchCompanies } from "hooks/useFetchCompanies";
// styles
import "./ProfileFavourite.scss";

function ProfileFavourite() {
  const [state, { updateCompany }] = useFetchCompanies("page", "isFavorited");

  return (
    <div className="profile_favourite">
      <h1 className="profile_title">Избранные компании</h1>

      {state.companies.length ? (
        <CompanyList
          className="profile_favourite-cards"
          type="favoriteCard"
          companies={state.companies}
          totalPages={state.totalPages}
          onCompanyUpdate={updateCompany}
        />
      ) : (
        <CompanyCardFavouriteNone />
      )}
    </div>
  );
}

export default ProfileFavourite;
