// Сторонние библиотеки
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// Компоненты
import Login from "components/Login/Login";
import Register from "components/Register/Register";
import NotFound from "components/NotFound/NotFound";
import ProtectedRouteElement from "components/ProtectedRoute/ProtectedRoute";
import Profile from "components/Profile/Profile";
import Main from "components/Main/Main";
import ForgetPassword from "components/ForgetPassword/ForgetPassword";

import ProfileInfo from "components/ProfileInfo/ProfileInfo";
import ProfileSupport from "components/ProfileSupport/ProfileSupport";
import ProfileFavourite from "components/ProfileFavourite/ProfileFavourite";

import Layout from "../Layout/Layout";
// Стили
import "./App.scss";

function App() {
  const [loggedIn, setLoggetIn] = useState(true);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/profile/*"
          element={<ProtectedRouteElement element={Profile} loggedIn={loggedIn} />}
        >
          <Route index element={<Navigate to="info" />} />
          <Route path="info" element={<ProfileInfo title="Профиль пользователя" />} />
          <Route path="favourite" element={<ProfileFavourite title="Избранные компании" />} />
          <Route path="support" element={<ProfileSupport title="Поддержка" />} />
        </Route>
        <Route index element={<Main />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/passrecovery" element={<ForgetPassword />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
