import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import { BrowserRouter } from "react-router-dom";

import ThemeProvider from "context/ThemeContext";
import App from "./pages/App/App";
import MainContextProvider from "./context/MainContext";

import "./index.scss";
import "./theme.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <MainContextProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </MainContextProvider>
  </StrictMode>,
);
