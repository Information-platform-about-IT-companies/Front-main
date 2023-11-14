import { Button } from "UI-KIT/Button/Button";
import { Link } from "react-router-dom";
import Icon from "UI-KIT/Icons";
import "./Header.scss";
import PropTypes from "prop-types";
import Input from "UI-KIT/Input/Input";

function Header({ loggedIn, userData }) {
  const isDark = true;

  return (
    <header className="header">
      <Link to="/" className="header__logo" />
      <nav className="header__navigation">
        {loggedIn ? (
          <>
            <Link to="/profile" className="header__userdata">
              <Icon icon="IconAccount" size="32" color="#4E4CBF" />
              <span className="header__user">{userData}</span>
            </Link>
            <Button size="standard" fill={false} title="Выйти" />
            <div className="header__theme-box">
              <Icon
                icon="IconThemeLight"
                size="30"
                color="#C0BFE2"
                extClassName="header__ligth-icon"
              />
              <Icon
                icon="IconThemeDark"
                size="30"
                color="#4E4CBF"
                extClassName="header__dark-icon"
              />
              <input type="checkbox" className="header__theme-button" />
              {/* <Input type="checkbox" extClassNameInput="header__theme-button" onlyInput>
              <Icon
                icon="IconThemeLight"
                size="24"
                color="#C0BFE2"
                extClassName={`header__ligth-icon ${isDark ? "header__ligth-icon_dark" : ""}`}
              />
              <Icon
                icon="IconThemeDark"
                size="24"
                color="#4E4CBF"
                extClassName={`header__dark-icon ${isDark ? "header__ligth-icon_light" : ""}`}
              />
            </Input> */}
            </div>
          </>
        ) : (
          <>
            <Button size="standard" fill={false} title="Войти" url="/signin" linkType="link" />
            <Button size="standard" fill title="Зарегистрироваться" url="signup" linkType="link" />
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
