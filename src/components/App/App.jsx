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
import Layout from "../Layout/Layout";
// Стили
import "./App.scss";

function App() {
  const [loggedIn, setLoggetIn] = useState(true);
  const [userData, setUserData] = useState("Вася Пупкин");
  return (
    <Routes>
      <Route
        path="/profile"
        element={<ProtectedRouteElement element={Profile} loggedIn={loggedIn} />}
      />
      <Route path="/" element={<Layout loggedIn={loggedIn} userData={userData} />}>
        <Route index element={<Main />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/passrecovery" element={<ForgetPassword />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/404" state={{ fromSameSite: true }} replace />} />
      </Route>
    </Routes>
  );
}

export default App;
