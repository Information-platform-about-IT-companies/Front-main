import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// functions
import { logout } from "api/authApi";
import { useMainContext } from "context/MainContext";
import { ThemeContext } from "context/ThemeContext";
// UI-KIT
import { Button } from "UI-KIT/Button/Button";
import Icon from "UI-KIT/Icons";
import ThemeSwitcher from "UI-KIT/ThemeSwitcher/ThemeSwitcher";
// styles
import "./Header.scss";
import "assets/style/main.scss";

function Header({ loggedIn, userData }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setData } = useMainContext();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    setData((data) => ({ ...data, currentUser: null }));
    navigate(`/`);
  };
  return (
    <header className="header">
      <Link to="/" className="header__logo" data-testid="headerLogoLink" />
      <nav className="header__navigation">
        {loggedIn ? (
          <>
            <Link to="/profile" className="header__userdata">
              <Icon icon="IconAccount" size="32" color="var(--icon-color)" />
              <span className="header__user">
                {userData && `${userData.firstName} ${userData.lastName}`}
              </span>
            </Link>
            <Button size="standard" fill={false} title="Выйти" onClick={onLogout} />
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
          </>
        ) : (
          <>
            <Button size="standard" title="Войти" url="/signin" linkType="link" />
            <Button size="standard" fill title="Зарегистрироваться" url="/signup" linkType="link" />
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

Header.defaultProps = {
  userData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};
