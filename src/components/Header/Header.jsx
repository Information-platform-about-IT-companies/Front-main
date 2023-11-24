import { Button } from "UI-KIT/Button/Button";
import { Link } from "react-router-dom";
import Icon from "UI-KIT/Icons";
import "./Header.scss";
import PropTypes from "prop-types";
import { logout } from "api/authApi";
import ScrollUp from "../ScrollUp/ScrollUp";

function Header({ loggedIn, userData }) {
  return (
    <header className="header">
      <Link to="/" className="header__logo" />
      <nav className="header__navigation">
        {loggedIn ? (
          <>
            <Link to="/profile" className="header__userdata">
              <Icon icon="IconAccount" size="32" color="#4E4CBF" />
              <span className="header__user">
                {userData && `${userData.firstName} ${userData.lastName}`}
              </span>
            </Link>
            <Button size="standard" fill={false} title="Выйти" onClick={() => logout()} />
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
