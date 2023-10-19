import Login from "components/Login/Login";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "components/Register/Register";
import NotFound from "components/NotFound/NotFound";
import ProtectedRouteElement from "components/ProtectedRoute/ProtectedRoute";
import Profile from "components/Profile/Profile";
import { useState } from "react";
import Main from "components/Main/Main";
import WelcomePage from "components/WelcomePage/WelcomePage";
import ForgetPassword from "components/FogetPassword/ForgetPassword";

function App() {
  const [loggedIn, setLoggetIn] = useState(null);
  return (
    <>
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
