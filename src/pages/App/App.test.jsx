import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter, useLocation } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";

function LocationDisplay() {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
}

describe("App component is renders", () => {
  it("Renders welcome message", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const appElem = screen.getByText(/Найдите подходящие для вас IT-компании в России/i);
    expect(appElem).toBeInTheDocument();
  });
});

describe("App routing", () => {
  it("full app rendering/navigating", async () => {
    render(<App />, { wrapper: BrowserRouter });

    // verify page content for default route
    expect(
      screen.getByText(/Найдите подходящие для вас IT-компании в России/i),
    ).toBeInTheDocument();

    const user = userEvent.setup();
    const logoClick = screen.getByTestId("headerLogoLink");
    await user.click(logoClick);

    // Wait for the text to appear in the document
    await waitFor(() => {
      expect(
        screen.getByText(/Найдите подходящие для вас IT-компании в России/i),
      ).toBeInTheDocument();
    });
  });

  it("landing on a 404 page", () => {
    const badRoute = "/some/bad/route";

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Страница не найдена/i)).toBeInTheDocument();
  });

  it("landing on a profile info page", () => {
    const route = "/profile/info";

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
        <LocationDisplay />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("location-display")).toHaveTextContent(route);
    expect(screen.getByText(/Профиль пользователя/i)).toBeInTheDocument();
  });

  it("landing on a profile favourite page", () => {
    const route = "/profile/favourite";

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
        <LocationDisplay />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("location-display")).toHaveTextContent(route);
    expect(screen.getAllByText(/Избранные компании/i)[1]).toBeInTheDocument();
  });

  it("landing on a profile support page", () => {
    const route = "/profile/support";

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
        <LocationDisplay />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("location-display")).toHaveTextContent(route);
    expect(screen.getAllByText(/Поддержка/i)[1]).toBeInTheDocument();
  });

  it("landing on a filter page", () => {
    const route = "/filter";

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
        <LocationDisplay />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("location-display")).toHaveTextContent(route);
    expect(screen.getByText(/Изучите лучшие компании России/i)).toBeInTheDocument();
  });

  it("landing on a company page", () => {
    const route = "/company";

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
        <LocationDisplay />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("location-display")).toHaveTextContent(route);
    //     expect(screen.getByText(/компания/i)).toBeInTheDocument();
  });

  it("landing on a signin page", () => {
    const route = "/signin";

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
        <LocationDisplay />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("location-display")).toHaveTextContent(route);
    expect(
      screen.getByText(/Войдите в систему, чтобы получить доступ к своей учетной записи/i),
    ).toBeInTheDocument();
  });

  it("landing on a signup page", () => {
    const route = "/signup";

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
        <LocationDisplay />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("location-display")).toHaveTextContent(route);
  });

  it("landing on a passrecovery page", () => {
    const route = "/passrecovery";

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
        <LocationDisplay />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("location-display")).toHaveTextContent(route);
  });
});
