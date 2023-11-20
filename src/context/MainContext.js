import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const initialValues = {
  currentUser: {
    id: 1,
    email: "VasyaPupkin@yandex.com",
    firstName: "Vasya",
    lastName: "Pupkin",
  },
};

export const MainContext = createContext(null);
export default function MainContextProvider({ children }) {
  const [data, setData] = useState(initialValues);
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
  return context;
};

MainContextProvider.PropTypes = {
  children: PropTypes.element.isRequired,
};
