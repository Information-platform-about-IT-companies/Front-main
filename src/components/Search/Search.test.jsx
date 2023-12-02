import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MainContextProvider from "context/MainContext";
import { Search } from "./Search";

const onChange = jest.fn();

describe("Search component", () => {
  it("renders Search component", () => {
    render(
      <MainContextProvider>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </MainContextProvider>,
    );
    const searchElem = screen.getByPlaceholderText(/Название компании или услуга/i);
    expect(searchElem).toBeInTheDocument();
  });
});
