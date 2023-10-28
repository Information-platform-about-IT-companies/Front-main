import { Button } from "UI-KIT/Button/Button";
import Icon from "UI-KIT/Icons";
import "./Header.scss";
import PropTypes from "prop-types";

function Header({ loggedIn }) {
  return (
    <header className="header">
      <div className="header__logo" />
      <nav className="header__navigation">
        {loggedIn ? (
          <>
            <Button
              type="button"
              size="standard"
              fill={false}
              title="Василий Пупкин"
              icon={<Icon icon="IconAccount" size="32" color="#4E4CBF" />}
              extClassName="icon_borderfree"
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

Header.PropTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
