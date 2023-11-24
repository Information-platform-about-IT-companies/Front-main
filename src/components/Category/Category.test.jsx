import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { makeFakeServices } from "mocks/tests/mocks";
import { LinkItem } from "UI-KIT/Link/LinkItem";
import { Category } from "./Category";

jest.mock("../../UI-KIT/Link/LinkItem.jsx");

describe("Category component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Category categories={makeFakeServices.companies} />
      </BrowserRouter>,
    );
  });
  it("renders Category component", () => {
    const categoryElem = screen.getByTestId("category");
    expect(categoryElem).toBeInTheDocument();
  });

  it("renders Category component links", () => {
    expect(LinkItem).toHaveBeenCalled();
  });
});
