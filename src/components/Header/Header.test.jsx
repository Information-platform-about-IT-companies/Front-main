import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Header component", () => {
  it("renders Header component when is logged in", () => {
    render(
      <BrowserRouter>
        <Header loggedIn userData="Test User" />
      </BrowserRouter>,
    );
    const headerElem = screen.getByText(/Test User/i);
    expect(headerElem).toBeInTheDocument();
  });
  it("renders Header component when is logged out", () => {
    render(
      <BrowserRouter>
        <Header loggedIn={false} userData="Test User" />
      </BrowserRouter>,
    );
    const headerElem = screen.getByText(/Войти/i);
    expect(headerElem).toBeInTheDocument();
  });

  it("should navigate to / when logo is clicked", () => {
    const { container } = render(
      <BrowserRouter>
        <Header loggedIn={true} userData="Test User" />
      </BrowserRouter>,
    );
    const linkElement = container.querySelector(".header__logo");
    expect(linkElement).toBeInTheDocument();
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe("/");
  });

  it("should navigate to /signin when enter button is clicked", () => {
    render(
      <BrowserRouter>
        <Header loggedIn={false} userData="Test User" />
      </BrowserRouter>,
    );
    const linkElement = screen.getByText(/Войти/i);
    expect(linkElement).toBeInTheDocument();
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe("/signin");
  });

  it("should navigate to /signup when register button is clicked", () => {
    render(
      <BrowserRouter>
        <Header loggedIn={false} userData="Test User" />
      </BrowserRouter>,
    );
    const linkElement = screen.getByText(/Зарегистрироваться/i);
    expect(linkElement).toBeInTheDocument();
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe("/signup");
  });

  // it('should navigate to /signout when exit button is clicked', () => {
  //   render(
  //     <BrowserRouter>
  //       <Header loggedIn={true} userData="Test User" />
  //     </BrowserRouter>
  //    );
  //    const linkElement = screen.getByText(/Выйти/i);
  //    expect(linkElement).toBeInTheDocument();
  //    fireEvent.click(linkElement);
  //    expect(window.location.pathname).toBe("/signout");
  // });

  // Дописать, когда будут эндпойнты выхода

  it("should navigate to /profile when profile button is clicked", () => {
    render(
      <BrowserRouter>
        <Header loggedIn={true} userData="Test User" />
      </BrowserRouter>,
    );
    const linkElement = screen.getByText(/Test User/i);
    expect(linkElement).toBeInTheDocument();
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe("/profile");
  });
});
