// Сторонние библиотеки
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useMainContext } from "context/MainContext";
import { userAPI } from "api/userApi";
// Компоненты
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
import { HTTP } from "api/http";
import CompanyPage from "../Company/CompanyPage";

function App() {
  const { data, setData } = useMainContext();
  const { currentUser } = data || {};

  const loggedIn = Boolean(HTTP.accessToken && currentUser);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await userAPI.getCurrentUser();
        setData({ ...data, currentUser: user });
      } catch (error) {
        console.log(error);
      }
    };
    if (HTTP.accessToken && !currentUser) {
      fetchCurrentUser();
    }
  }, [HTTP.refreshToken]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout loggedIn={loggedIn} userData={currentUser} />}>
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
          <Route path="/signin" element={loggedIn ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={loggedIn ? <Navigate to="/" /> : <Register />} />
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
