import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MainContextProvider from "context/MainContext";
import ProfileInfo from "./ProfileInfo";

describe("ProfileInfo component", () => {
  it("renders ProfileInfo component", () => {
    render(
      <MainContextProvider>
        <BrowserRouter>
          <ProfileInfo />
        </BrowserRouter>
      </MainContextProvider>,
    );
    const profileElement = screen.getByText(/Профиль пользователя/i);
    expect(profileElement).toBeInTheDocument();
  });
});
