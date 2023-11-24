import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Filter } from "./Filter";

describe("Filter component", () => {
  it("renders Filter component", () => {
    render(
      <BrowserRouter>
        <Filter />
      </BrowserRouter>,
    );
    const filterElem = screen.getByTestId("filterSection");
    expect(filterElem).toBeInTheDocument();
  });
});
