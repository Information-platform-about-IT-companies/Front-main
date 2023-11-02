import { Outlet } from "react-router-dom";
import "./Profile.scss";
import { Button } from "UI-KIT/Button/Button";

function Profile() {
  return (
    <main className="profile">
      <nav className="profile_navigation">
        <Button
          extClassName="profile_navigation_button"
          size="standard"
          url="info"
          title="Личные данные"
        />

        <Button
          extClassName="profile_navigation_button"
          size="standard"
          url="favourite"
          title="Избранные компании"
        />

        <Button
          extClassName="profile_navigation_button"
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
