import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { makeFakeServices } from "mocks/tests/mocks";
// UI-KIT
import { LinkItem } from "UI-KIT/Link/LinkItem";
// Components
import { Category } from "./Category";

jest.mock("../../UI-KIT/Link/LinkItem.jsx");

describe("Category component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-lifecycle
    render(
      <BrowserRouter>
        <Category
          id={1}
          name="Разработка ПО"
          icon="IconCategorySoftware"
          services={makeFakeServices.companies[0].services}
        />
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
