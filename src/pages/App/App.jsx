// Сторонние библиотеки
import { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// Компоненты
import { ThemeContext } from "context/ThemeContext";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import NotFound from "pages/NotFound/NotFound";
import ProtectedRouteElement from "components/ProtectedRoute/ProtectedRoute";
import Profile from "pages/Profile/Profile";
import Main from "pages/Main/Main";
import ForgetPassword from "pages/ForgetPassword/ForgetPassword";
import ProfileInfo from "components/ProfileInfo/ProfileInfo";
import ProfileSupport from "components/ProfileSupport/ProfileSupport";
import ProfileFavourite from "components/ProfileFavourite/ProfileFavourite";
import Layout from "components/Layout/Layout";
// Стили
import "./App.scss";
import FilterPage from "pages/FilterPage/FilterPage";
import ScrollUp from "components/ScrollUp/ScrollUp";
import CompanyPage from "../Company/CompanyPage";

function App() {
  const [loggedIn, setLoggetIn] = useState(true);
  const [userData, setUserData] = useState("Вася Пупкин");

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout loggedIn={loggedIn} userData={userData} />}>
          <Route
            path="/profile/*"
            element={<ProtectedRouteElement element={Profile} loggedIn={loggedIn} />}
          >
            <Route index element={<Navigate to="info" />} />
            <Route path="info" element={<ProfileInfo />} />
            <Route path="favourite" element={<ProfileFavourite />} />
            <Route path="support" element={<ProfileSupport />} />
          </Route>
          <Route index element={<Main />} />
          <Route path="/filter/*" element={<FilterPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/passrecovery" element={<ForgetPassword />} />
          <Route path="/404" element={<NotFound />} />
          <Route
            path="/*"
            element={<Navigate to="/404" state={{ fromSameSite: true }} replace />}
          />
        </Route>
      </Routes>
      <ScrollUp />
    </>
  );
}

export default App;
