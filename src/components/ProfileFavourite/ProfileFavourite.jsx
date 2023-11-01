import "./ProfileFavourite.scss";

import { Route, Routes, Link, Outlet, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Input from "UI-KIT/Input/Input";
import { Button } from "UI-KIT/Button/Button";

function ProfileFavourite({ title, props }) {
  return (
    <div className="profile_details">
      <h1>{title}</h1>
      {props ? (
        { props }
      ) : (
        <>
          <h4>Тут пока пусто</h4>
          <p>Нажмите кнопку ниже, чтобы найти полезные компании.</p>
          <Button title="Поиск компаний" />
        </>
      )}
    </div>
  );
}

export default ProfileFavourite;
