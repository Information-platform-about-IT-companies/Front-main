import "./ProfileFavourite.scss";

import { Button } from "UI-KIT/Button/Button";
import CompanyCard from "components/CompanyCard/CompanyCard";
import { companies } from "services/constants";

function ProfileFavourite() {
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
                  iconLikeState={company.isFavourite}
                  extClassCardName="__favourite"
                />
              </li>
            ))}
          </ul>
          <div>тут будет пагинация</div>
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
