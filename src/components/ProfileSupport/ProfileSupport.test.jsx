import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
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
