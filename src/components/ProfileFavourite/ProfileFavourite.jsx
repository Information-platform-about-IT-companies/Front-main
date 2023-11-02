import "./ProfileFavourite.scss";

import { Route, Routes, Link, Outlet, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Input from "UI-KIT/Input/Input";
import { Button } from "UI-KIT/Button/Button";

function ProfileFavourite({ props }) {
  return (
    <div className="profile_favourite">
      <h1 className="profile_title">Избранные компании</h1>
      {props ? (
        { props }
      ) : (
        <div className="profile_favourite-details">
          <h4 className="profile_subtitle">Тут пока пусто</h4>
          <p className="profile_description">Нажмите кнопку ниже, чтобы найти полезные компании.</p>
          <Button fill onClick={() => {}} size="standard" title="Поиск компаний" url="#" />
        </div>
      )}
    </div>
  );
}

export default ProfileFavourite;
