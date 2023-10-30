import { Button } from "UI-KIT/Button/Button";
import { LinkItem } from "UI-KIT/Link/LinkItem";
import { Link } from "react-router-dom";
import Icon from "UI-KIT/Icons";
import "./Header.scss";
import PropTypes from "prop-types";

function Header({ loggedIn, userData }) {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo" />
      </Link>
      <nav className="header__navigation">
        {loggedIn ? (
          <>
            <LinkItem
              url="/profile"
              title={userData}
              icon={<Icon icon="IconAccount" size="32" color="#4E4CBF" />}
            />
            <Button type="button" size="standard" fill="false" title="Выйти" />
          </>
        ) : (
          <>
            <Button type="button" size="standard" fill={false} title="Войти" />
            <Button type="button" size="standard" fill title="Зарегистрироваться" />
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
