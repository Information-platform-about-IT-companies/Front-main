import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Search.scss";

import Input from "UI-KIT/Input/Input";
import { Button } from "UI-KIT/Button/Button";
import Icon from "UI-KIT/Icons";

export function Search() {
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
  const [isStartHint, setIsStartHint] = React.useState(true);
  const [query, setQuery] = React.useState("");
  const [response, setResponse] = React.useState([]);
  const [responseNotFound, serResponseNotFound] = React.useState(false);

  React.useEffect(() => {
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

  const hint = response.map((ul) => {
    const li = ul.element.map((e) => (
      <li className="search__hint-list-element" key={e.name}>
        <Link to="e.link" className="search__hint-link">
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
    <div className="search">
      <Input
        icon={<Icon icon="IconSearch" color="#4e4cbf" size="24" />}
        extClassNameLabel="search__input-label"
        name="search"
        id="search"
        required="false"
        placeholder="Название компании или услуга"
        onChange={() => console.log("изменение инпута name")}
      />
      <Input
        icon={<Icon icon="IconPin" color="#4e4cbf" size="24" />}
        extClassNameLabel="search__input-label"
        name="city"
        id="city"
        required="false"
        placeholder="Город"
        onChange={() => console.log("изменение инпута city")}
      />
      <Button
        extClassName="search__input-button"
        size="standard"
        title="Поиск"
        fill="true"
        onClick={() => console.log("нажата кнопка поиска")}
        disabled={isButtonDisabled}
      />
      {isStartHint && !responseNotFound ? (
        <div className="search__hint">{hint}</div>
      ) : (
        <div className="search__hint">
          <div className="search__hint-container">
            <div className="search__hint-header search__hint-header_no-found">
              По вашему запросу ничего не найдено
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
