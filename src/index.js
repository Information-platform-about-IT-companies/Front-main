import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./components/App/App";
import ThemeContextProvider from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>,
);
