import { Route, Routes, Link, Outlet, useParams } from "react-router-dom";
import "./Profile.scss";
import PropTypes from "prop-types";
import { Button } from "UI-KIT/Button/Button";

function Profile() {
  return (
    <section className="profile">
      <nav>
        <ul>
          <li>
            <Button url="info" title="Личные данные" withBullet={false} />
          </li>
          <li>
            <Button url="favourite" title="Избранные компании" />
          </li>
          <li>
            <Button url="support" title="Поддержка" />
          </li>
        </ul>
      </nav>

      <Outlet />
    </section>
  );
}

export default Profile;
