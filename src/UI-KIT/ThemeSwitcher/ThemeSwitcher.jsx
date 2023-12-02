import React from "react";
import { themes } from "context/ThemeContext";
import PropTypes from "prop-types";
import Icon from "UI-KIT/Icons";
import "./ThemeSwitcher.scss";

function ThemeSwitcher({ theme, setTheme }) {
  function toggleTheme() {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  }

  return (
    <div className="theme-switcher">
      <Icon
        icon="IconThemeLight"
        size="30"
        color="#6c6ad7"
        extClassName="theme-switcher__ligth-icon"
      />
      <Icon
        icon="IconThemeDark"
        size="30"
        color="#4E4CBF"
        extClassName="theme-switcher__dark-icon"
      />
      <input
        type="checkbox"
        className="theme-switcher__theme-button"
        onClick={() => toggleTheme()}
        defaultChecked={theme === "dark"}
      />
    </div>
  );
}

ThemeSwitcher.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
