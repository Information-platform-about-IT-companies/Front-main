import "./ProfileSupport.scss";

import { Route, Routes, Link, Outlet, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Input from "UI-KIT/Input/Input";

function ProfileSupport({ title }) {
  return (
    <div className="profile-section">
      <h1>{title}</h1>
      <Input />
      <Input />
    </div>
  );
}

export default ProfileSupport;
