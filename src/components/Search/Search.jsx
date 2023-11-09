import React from "react";
import { Link } from "react-router-dom";

import Input from "UI-KIT/Input/Input";
import { Button } from "UI-KIT/Button/Button";
import Icon from "UI-KIT/Icons";

import "./Search.scss";

export function Search({ extClassName, ...props }) {
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
  const [isStartHint, setIsStartHint] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [queryCity, setCityQuery] = React.useState("");
  const [response, setResponse] = React.useState([]);
  const [responseNotFound, setResponseNotFound] = React.useState(false);

  React.useEffect(() => {
    setIsButtonDisabled(true);
    setIsStartHint(false);
    setResponse([
      {
        title: "company",
        element: [
          { name: "Mentalstack", link: "/" },
          { name: "Mentalist", link: "/" },
        ],
      },
      { title: "city", element: [{ name: "Menesota", link: "/" }] },
    ]);
  }, []);

  React.useEffect(() => {
    if (query.length >= 3 || queryCity.length >= 3) {
      setIsStartHint(true);
    } else {
      setIsStartHint(false);
    }

    if (query || queryCity) {
      setIsButtonDisabled(false);
    }
  }, [query, queryCity]);

  function handleSubmitSearch(event) {
    event.preventDefault();
    console.log("начинаем поиск");
  }

  const hint = response.map((ul) => {
    const li = ul.element.map((e) => (
      <li className="search__hint-list-element" key={e.name}>
        <Link to={e.link} className="search__hint-link">
          {e.name}
        </Link>
      </li>
    ));

    let label;
    switch (ul.title) {
      case "company":
        label = "компаниях";
        break;
      case "city":
        label = "городах";
        break;
      case "service":
        label = "услугах";
        break;
      default:
        label = ul.title;
    }

    return (
      <div className="search__hint-container">
        <div className="search__hint-header" key={ul.title}>
          Найдено в {label}
        </div>
        <ul className="search__hint-list">{li}</ul>
      </div>
    );
  });

  return (
    <form className={`search ${extClassName}`} onSubmit={handleSubmitSearch}>
      <Input
        icon={<Icon icon="IconSearch" color="#4e4cbf" size="24" />}
        extClassNameInput="search__input_1"
        onlyInput
        name="search"
        id="search"
        placeholder="Название компании или услуга"
        onChange={(event) => setQuery(event.target.value)}
      />
      <Input
        icon={<Icon icon="IconPin" color="#4e4cbf" size="24" />}
        extClassNameInput="search__input_2"
        onlyInput
        name="city"
        id="city"
        placeholder="Город"
        onChange={(event) => setCityQuery(event.target.value)}
      />
      <Button
        extClassName="search__input-button"
        size="medium"
        title="Поиск"
        fill
        disabled={isButtonDisabled}
      />
      {isStartHint && !responseNotFound && (
        <div className={`search__hint  ${isStartHint ? "search__hint_active" : ""}`}>{hint}</div>
      )}
      {isStartHint && responseNotFound && (
        <div className="search__hint">
          <div className="search__hint-container">
            <div className="search__hint-header search__hint-header_no-found">
              По вашему запросу ничего не найдено
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
