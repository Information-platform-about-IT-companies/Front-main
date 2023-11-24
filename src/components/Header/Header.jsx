import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// UI-KIT
import { Button } from "UI-KIT/Button/Button";
import Icon from "UI-KIT/Icons";
import ThemeSwitcher from "UI-KIT/ThemeSwitcher/ThemeSwitcher";
// styles
import "./Header.scss";
import "assets/style/main.scss";

function Header({ loggedIn, userData }) {
  return (
    <header className="header">
      <Link to="/" className="header__logo" data-testid="headerLogoLink" />
      <nav className="header__navigation">
        {loggedIn ? (
          <>
            <Link to="/profile" className="header__userdata">
              <Icon icon="IconAccount" size="32" color="var(--icon-color)" />
              <span className="header__user">{userData}</span>
            </Link>
            <Button size="standard" fill={false} title="Выйти" />
            <ThemeSwitcher />
          </>
        ) : (
          <>
            <Button size="standard" fill={false} title="Войти" url="/signin" linkType="link" />
            <Button size="standard" fill title="Зарегистрироваться" url="signup" linkType="link" />
            <ThemeSwitcher />
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  userData: PropTypes.string,
};

Header.defaultProps = {
  userData: "",
};
