import { Outlet } from "react-router-dom";
// UI-KIT
import { Button } from "UI-KIT/Button/Button";
// styles
import "./Profile.scss";

function Profile() {
  return (
    <main className="profile">
      <nav className="profile__navigation">
        <Button
          linkType="navlink"
          extClassName="profile__navigation-button"
          size="standard"
          url="info"
          title="Личные данные"
        />

        <Button
          linkType="navlink"
          extClassName="profile__navigation-button"
          size="standard"
          url="favourite"
          title="Избранные компании"
        />

        <Button
          linkType="navlink"
          extClassName="profile__navigation-button"
          size="standard"
          url="support"
          title="Поддержка"
        />
      </nav>
      <div className="profile_details">
        <Outlet />
      </div>
    </main>
  );
}

export default Profile;
