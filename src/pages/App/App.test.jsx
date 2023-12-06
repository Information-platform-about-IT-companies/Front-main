import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, useLocation } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import MainContextProvider from "context/MainContext";
import App from "./App";

function LocationDisplay() {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}

describe("App component is renders", () => {
  it("Renders welcome message", () => {
    render(
      <MainContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MainContextProvider>,
    );
    const appElem = screen.getByText(/Найдите подходящие для вас IT-компании в России/i);
    expect(appElem).toBeInTheDocument();
  });
});

describe("App routing", () => {
  it("full app rendering/navigating", async () => {
    render(
      <MainContextProvider>
        <App />
      </MainContextProvider>,
      { wrapper: BrowserRouter },
    );

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
      <MainContextProvider>
        <MemoryRouter initialEntries={[badRoute]}>
          <App />
        </MemoryRouter>
      </MainContextProvider>,
    );

    expect(screen.getByText(/Страница не найдена/i)).toBeInTheDocument();
  });

  it("landing on a filter page", () => {
    const route = "/filter";

    render(
      <MainContextProvider>
        <MemoryRouter initialEntries={[route]}>
          <App />
          <LocationDisplay />
        </MemoryRouter>
      </MainContextProvider>,
    );

    expect(screen.getByTestId("location-display")).toHaveTextContent(route);
  });
});
