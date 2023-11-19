import React, { useContext, useEffect } from "react";
import { ThemeContext, themes } from "context/ThemeContext";
import Icon from "UI-KIT/Icons";
import "./ThemeSwitcher.scss";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

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

export default ThemeSwitcher;
