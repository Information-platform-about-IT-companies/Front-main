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
  const elementToggle = React.useRef(null);

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
      <div className="search__hint-list-container">
        <div className="search__hint-list-header" key={ul.title}>
          Найдено в {label}
        </div>
        <ul className="search__hint-list">{li}</ul>
      </div>
    );
  });

  const hintNotFound = (
    <div className="search__hint-list-container">
      <div className="search__hint-list-header search__hint-header_no-found">
        По вашему запросу ничего не найдено
      </div>
    </div>
  );

  function toggleBlock(toggle) {
    if (toggle) {
      elementToggle.current.style.height = `${elementToggle.current.scrollHeight}px`;
    } else {
      elementToggle.current.style.height = "0";
    }
  }

  React.useEffect(() => {
    if (query.length >= 3 || queryCity.length >= 3) {
      setIsStartHint(true);
      toggleBlock(true);
    } else {
      setIsStartHint(false);
      toggleBlock(false);
    }

    if (query || queryCity) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [query, queryCity]);

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
      <div ref={elementToggle} className="search__hint">
        {responseNotFound ? hintNotFound : hint}
      </div>
    </form>
  );
}
