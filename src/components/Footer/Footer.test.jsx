import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

it("renders Footer component ", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>,
  );
  const findFooterElem = screen.getByText(/Copyright 2023 Octopus/i);
  expect(findFooterElem).toBeInTheDocument();
});
