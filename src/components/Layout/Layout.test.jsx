import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

describe("Layout component", () => {
  it("renders Layout component when is logged in", () => {
    render(
      <BrowserRouter>
        <Layout loggedIn userData="Test User" />
      </BrowserRouter>,
    );
    const findCompaniesElem = screen.getByText(/Test User/i);
    expect(findCompaniesElem).toBeInTheDocument();
  });

  it("renders Layout component when is logged out", () => {
    render(
      <BrowserRouter>
        <Layout loggedIn={false} userData={{ firstName: "Test", lastName: "User" }} />
      </BrowserRouter>,
    );
    const findLayoutElem = screen.getByText(/Войти/i);
    expect(findLayoutElem).toBeInTheDocument();
  });
});
