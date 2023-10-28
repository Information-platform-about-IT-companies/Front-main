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
import WelcomePage from "components/WelcomePage/WelcomePage";
import ForgetPassword from "components/ForgetPassword/ForgetPassword";
// Стили
import "./App.scss";

function App() {
  const [loggedIn, setLoggetIn] = useState(null);
  return (
    <>
      <Breadcrumbs
        main={{
          name: "Главная",
          url: "https://www.figma.com/file/MDEs5K1tETvN45PgPGHaFr/IT-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0?node-id=42%3A2&mode=dev",
        }}
        services={{
          name: "Веб-разработка",
          url: "https://www.figma.com/file/MDEs5K1tETvN45PgPGHaFr/IT-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0?node-id=42%3A2&mode=dev",
        }}
        city={{
          name: "Таганрог",
          url: "https://www.figma.com/file/MDEs5K1tETvN45PgPGHaFr/IT-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0?node-id=42%3A2&mode=dev",
        }}
        company={{
          name: "Mentalstack",
          url: "https://www.figma.com/file/MDEs5K1tETvN45PgPGHaFr/IT-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0?node-id=42%3A2&mode=dev",
        }}
      />
      <div>Information-platform-about-IT-companies</div>
      <Routes>
        <Route
          path="/profile"
          element={<ProtectedRouteElement element={Profile} loggedIn={loggedIn} />}
        />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Main />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/passrecovery" element={<ForgetPassword />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  );
}

export default App;
