import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MainContextProvider from "context/MainContext";
import Layout from "./Layout";

describe("Layout component", () => {
  it("renders Layout component when is logged out", () => {
    render(
      <MainContextProvider>
        <BrowserRouter>
          <Layout loggedIn={false} userData={{ firstName: "Test", lastName: "User" }} />
        </BrowserRouter>
      </MainContextProvider>,
    );
    const findLayoutElem = screen.getByText(/Войти/i);
    expect(findLayoutElem).toBeInTheDocument();
  });
});
