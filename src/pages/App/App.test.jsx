import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

it("renders welcome message", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const findCompaniesElem = screen.getByText(/Найдите подходящие для вас IT-компании в России/i);
  expect(findCompaniesElem).toBeInTheDocument();
});
