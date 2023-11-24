// UI-KIT
import { Button } from "UI-KIT/Button/Button";
// Components
import CompanyCard from "components/CompanyCard/CompanyCard";
import { Pagination } from "components/Pagination/Pagination";
// functions
import { companies } from "services/constants";
// styles
import "./ProfileFavourite.scss";

function ProfileFavourite() {
  // TODO апи, пагинация
  const page = 1;
  const totalPages = 2;
  return (
    <div className="profile_favourite">
      <h1 className="profile_title">Избранные компании</h1>
      {companies ? (
        <>
          <ul className="profile_favourite-cards">
            {companies.map((company) => (
              <li key={`${company.name}`}>
                <CompanyCard
                  city={company.city}
                  name={company.name}
                  onIconHeartClick={() => {}}
                  inFavorite={company.inFavorite}
                  type="favoriteCard"
                />
              </li>
            ))}
          </ul>
          <Pagination totalPages={totalPages} currentPage={page} />
        </>
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
