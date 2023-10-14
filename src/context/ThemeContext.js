import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { THEMECOLOR } from "utils/constants";

export const ThemeContext = createContext(null);
export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(THEMECOLOR.LIGHT);
  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Попытка использовать хук useThemeContext за пределами ThemeContextProvider");
  }
};

ThemeContextProvider.PropTypes = {
  children: PropTypes.element.isRequired,
};
