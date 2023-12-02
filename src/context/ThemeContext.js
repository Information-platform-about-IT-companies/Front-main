import { createContext, useState, useEffect, useMemo } from "react";

export const themes = {
  dark: "dark",
  light: "light",
};

function getTheme() {
  const theme = localStorage.getItem("theme");

  const userMediaLight = window.matchMedia("(prefers-color-scheme: light)");
  const userMediaDark = window.matchMedia("(prefers-color-scheme: dark)");

  const systemTheme = userMediaLight.matches ? userMediaLight : userMediaDark;

  const userSystemTheme = systemTheme.media.split(/(:\s)/)[2].split(")")[0];

  if (Object.values(themes).includes(theme)) {
    if (localStorage.getItem("userSystemTheme") !== userSystemTheme) {
      localStorage.setItem("userSystemTheme", userSystemTheme);
      localStorage.setItem("theme", userSystemTheme);
    }
    return theme;
  }

  localStorage.setItem("userSystemTheme", userSystemTheme);
  if (userMediaLight.matches) {
    return themes.light;
  }
  return themes.dark;
}

export const ThemeContext = createContext({});
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getTheme());
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
