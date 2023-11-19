import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, useLocation } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Footer from "./Footer";

function LocationDisplay() {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
}

describe("Header component is renders", () => {
  it("renders Footer component", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const findFooterElem = screen.getByText(/Copyright 2023 Octopus/i);
    expect(findFooterElem).toBeInTheDocument();
  });

  it("should navigate to https://practicum.yandex.ru/ when link is clicked", async () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const findFooterLink = screen.getByText(/Сделано студентами Яндекс Практикума/i);
    expect(findFooterLink).toBeInTheDocument();

    const linkElement = screen.getByRole("link", { name: /Сделано студентами Яндекс Практикума/i });
    expect(linkElement).toHaveAttribute("href", "https://practicum.yandex.ru/");
    await userEvent.click(linkElement);
  });
});
