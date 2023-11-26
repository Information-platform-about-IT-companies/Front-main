// UI-KIT
import { Button } from "UI-KIT/Button/Button";
// Components
import { CompanyList } from "components/CompanyList/CompanyList";
// functions
import { useFetchCompanies } from "hooks/useFetchCompanies";
// styles
import "./ProfileFavourite.scss";

function ProfileFavourite() {
  const [state, { updateCompany }] = useFetchCompanies("page", "isFavorited");

  return (
    <div className="profile_favourite">
      <h1 className="profile_title">Избранные компании</h1>

      {state.companies ? (
        <CompanyList
          className="profile_favourite-cards"
          type="favoriteCard"
          companies={state.companies}
          totalPages={state.totalPages}
          onCompanyUpdate={updateCompany}
        />
      ) : (
        <div className="profile_favourite-details">
          <h4 className="profile_subtitle">Тут пока пусто</h4>
          <p className="profile_description">Нажмите кнопку ниже, чтобы найти полезные компании.</p>
          <Button
            fill
            extClassName="profile_favourite-find-button"
            onClick={() => {}}
            size="standard"
            title="Поиск компаний"
            url="#"
          />
        </div>
      )}
    </div>
  );
}

export default ProfileFavourite;
