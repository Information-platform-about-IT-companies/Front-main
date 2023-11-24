import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Footer from "./Footer";

describe("Header component is renders", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
  });
  it("renders Footer component", () => {
    const findFooterElem = screen.getByText(/Copyright 2023 Octopus/i);
    expect(findFooterElem).toBeInTheDocument();
  });

  it("should navigate to https://practicum.yandex.ru/ when link is clicked", async () => {
    const findFooterLink = screen.getByText(/Сделано студентами Яндекс Практикума/i);
    expect(findFooterLink).toBeInTheDocument();

    const linkElement = screen.getByRole("link", { name: /Сделано студентами Яндекс Практикума/i });
    expect(linkElement).toHaveAttribute("href", "https://practicum.yandex.ru/");
    await userEvent.click(linkElement);
  });
});
