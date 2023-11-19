import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import ScrollUp from "./ScrollUp";

describe("ScrollUp component is renders", () => {
  it("renders ScrollUp", () => {
    render(
      <BrowserRouter>
        <ScrollUp />
      </BrowserRouter>,
    );
    const scrollUpElem = screen.getByTestId("skrollUp");
    expect(scrollUpElem).toBeInTheDocument();

    // проверить, что при клике поднимается наверх
  });
});
