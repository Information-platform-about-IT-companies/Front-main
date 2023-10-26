import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import MainContextProvider from "./context/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <MainContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MainContextProvider>
  </StrictMode>,
);
