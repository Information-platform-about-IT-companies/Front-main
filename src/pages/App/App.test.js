import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MainContextProvider from "context/MainContext";
import App from "./App";

it("renders welcome message", () => {
  render(
    <MainContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MainContextProvider>,
  );
  expect(screen.getByText(/Найдите подходящие для вас IT-компании в России/i)).toBeInTheDocument();
});
