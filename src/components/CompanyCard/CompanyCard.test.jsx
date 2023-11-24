import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { makeFakeCard } from "mocks/tests/mocks";
import CompanyCard from "./CompanyCard";

describe("CompanyCard component", () => {
  it("renders favourited CompanyCard component", () => {
    render(
      <BrowserRouter>
        <CompanyCard
          type="favoriteCard"
          logo={makeFakeCard.logo}
          name={makeFakeCard.name}
          city={makeFakeCard.city}
          services={makeFakeCard.services}
          description={makeFakeCard.description}
          inFavorite={makeFakeCard.inFavorite}
        />
      </BrowserRouter>,
    );
    const cardElem = screen.getByText(`${makeFakeCard.name}`);
    expect(cardElem).toBeInTheDocument();
  });

  it("renders filter CompanyCard component", () => {
    render(
      <BrowserRouter>
        <CompanyCard
          type="filterCard"
          logo={makeFakeCard.logo}
          name={makeFakeCard.name}
          city={makeFakeCard.city}
          services={makeFakeCard.services}
          description={makeFakeCard.description}
          inFavorite={makeFakeCard.inFavorite}
        />
      </BrowserRouter>,
    );
    const cardElem = screen.getByText(`${makeFakeCard.name}`);
    expect(cardElem).toBeInTheDocument();
  });
});

// Проверки на лайк, подробнее, услуги
