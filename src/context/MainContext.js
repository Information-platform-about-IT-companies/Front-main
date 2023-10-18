import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const MainContext = createContext(null);
export default function MainContextProvider({ children }) {
  const [data, setData] = useState({
    // тут будет дата
    // vcvdvfdf
  });
  const value = useMemo(
    () => ({
      data,
      setData,
    }),
    [data],
  );
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("Попытка использовать хук useThemeContext за пределами ThemeContextProvider");
  }
};

MainContextProvider.PropTypes = {
  children: PropTypes.element.isRequired,
};
