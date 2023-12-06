import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import MainContextProvider from "../../context/MainContext";

describe("Header component is renders", () => {
  it("renders Header component when is logged in", () => {
    render(
      <MainContextProvider>
        <BrowserRouter>
          <Header loggedIn userData={{ firstName: "Test", lastName: "User" }} />
        </BrowserRouter>
      </MainContextProvider>,
    );
    const headerElem = screen.getByText(/Test User/i);
    expect(headerElem).toBeInTheDocument();
  });
  it("renders Header component when is logged out", () => {
    render(
      <MainContextProvider>
        <BrowserRouter>
          <Header loggedIn={false} userData={{ firstName: "Test", lastName: "User" }} />
        </BrowserRouter>
      </MainContextProvider>,
    );
    const headerElem = screen.getByText(/Войти/i);
    expect(headerElem).toBeInTheDocument();
  });
});

describe("Header component navigation", () => {
  it("should navigate to / when logo is clicked", async () => {
    render(
      <MainContextProvider>
        <BrowserRouter>
          <Header loggedIn userData="Test User" />
        </BrowserRouter>
      </MainContextProvider>,
    );
    const linkElement = screen.getByTestId("headerLogoLink");
    expect(linkElement).toBeInTheDocument();

    await waitFor(async () => {
      await userEvent.click(linkElement);
      expect(window.location.pathname).toBe("/");
    });
  });

  it("should navigate to /signin when enter button is clicked", async () => {
    render(
      <MainContextProvider>
        <BrowserRouter>
          <Header loggedIn={false} userData={{ firstName: "Test", lastName: "User" }} />
        </BrowserRouter>
      </MainContextProvider>,
    );
    const linkElement = screen.getByText(/Войти/i);
    expect(linkElement).toBeInTheDocument();
    await waitFor(async () => {
      await userEvent.click(linkElement);
      expect(window.location.pathname).toBe("/signin");
    });
  });

  it("should navigate to /signup when register button is clicked", async () => {
    render(
      <MainContextProvider>
        <BrowserRouter>
          <Header loggedIn={false} userData={{ firstName: "Test", lastName: "User" }} />
        </BrowserRouter>
      </MainContextProvider>,
    );
    const linkElement = screen.getByText(/Зарегистрироваться/i);
    expect(linkElement).toBeInTheDocument();
    await waitFor(async () => {
      await userEvent.click(linkElement);
      expect(window.location.pathname).toBe("/signup");
    });
  });

  it("should navigate to /profile when profile button is clicked", async () => {
    render(
      <MainContextProvider>
        <BrowserRouter>
          <Header loggedIn userData={{ firstName: "Test", lastName: "User" }} />
        </BrowserRouter>
      </MainContextProvider>,
    );
    const linkElement = screen.getByText(/Test User/i);
    expect(linkElement).toBeInTheDocument();
    await waitFor(async () => {
      await userEvent.click(linkElement);
      expect(window.location.pathname).toBe("/profile");
    });
  });
});
