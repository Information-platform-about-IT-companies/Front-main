import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.scss";
import App from "./components/App/App";
import ThemeContextProvider from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
      <p>test husky3</p>
    </ThemeContextProvider>
  </StrictMode>,
);
