import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { makeFakeUser } from "mocks/tests/mocks";
import ProfileSupport from "./ProfileSupport";

describe("ProfileSupport component", () => {
  it("renders ProfileSupport component", () => {
    render(
      <BrowserRouter>
        <ProfileSupport />
      </BrowserRouter>,
    );
    const profileSupportElement = screen.getByText(/Поддержка/i);
    expect(profileSupportElement).toBeInTheDocument();
  });
});
