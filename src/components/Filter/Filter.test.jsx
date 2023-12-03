import React, { useReducer } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { reducer, initialState } from "store/reducers/filterReducer";
import { Filter } from "./Filter";

describe("Filter component", () => {
  it("renders Filter component", () => {
    function TestComponent() {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
        <BrowserRouter>
          <Filter state={state} dispatch={dispatch} />
        </BrowserRouter>
      );
    }

    render(<TestComponent />);
    const filterElem = screen.getByTestId("filterSection");
    expect(filterElem).toBeInTheDocument();
  });
});
