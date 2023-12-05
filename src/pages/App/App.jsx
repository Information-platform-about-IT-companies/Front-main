// Сторонние библиотеки
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// functions
import { useMainContext } from "context/MainContext";
import { userAPI } from "api/userApi";
import { HTTP } from "api/http";
// Компоненты
import ProtectedRouteElement from "components/ProtectedRoute/ProtectedRoute";
import ProfileInfo from "components/ProfileInfo/ProfileInfo";
import ProfileSupport from "components/ProfileSupport/ProfileSupport";
import ProfileFavourite from "components/ProfileFavourite/ProfileFavourite";
import Layout from "components/Layout/Layout";
import ScrollUp from "components/ScrollUp/ScrollUp";
// pages
import FilterPage from "pages/FilterPage/FilterPage";
import CompanyPage from "pages/Company/CompanyPage";
import Profile from "pages/Profile/Profile";
import Main from "pages/Main/Main";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import NotFound from "pages/NotFound/NotFound";
import ForgetPassword from "pages/ForgetPassword/ForgetPassword";
// Стили
import "./App.scss";
import RecoveryPassword from "../RecoveryPassword/RecoveryPassword";

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
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    if (HTTP.accessToken && !currentUser) {
      fetchCurrentUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <Route path="/companies/:companyId" element={<CompanyPage />} />
          <Route path="/signin" element={loggedIn ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={loggedIn ? <Navigate to="/" /> : <Register />} />
          <Route
            path="/reset-password-confirm"
            element={loggedIn ? <Navigate to="/" /> : <RecoveryPassword />}
          />
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
