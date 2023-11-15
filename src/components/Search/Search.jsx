import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import Input from "UI-KIT/Input/Input";
import { Button } from "UI-KIT/Button/Button";
import Icon from "UI-KIT/Icons";
import dropDownBlock from "services/dropDown";

import "./Search.scss";
import searchApi from "services/SearchApi";
import IconFilter from "UI-KIT/Icons/IconFilter";

export function Search({ extClassName, ...props }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isStartHint, setIsStartHint] = useState(false);
  const [query, setQuery] = useState("");
  const [queryCity, setCityQuery] = useState("");
  const [response, setResponse] = useState([]);
  const elementToggle = useRef(null);

  function handleSubmitSearch(event) {
    event.preventDefault();
    console.log("начинаем поиск");
    // TODO переходим на страницу фильтра с выбранными параметрами
    // TODO переходим на страницу компании если выбрана компания
  }

  async function addResponseSearchCities(searchQuery) {
    // console.log(searchApi.getSearchCities(searchQuery));
    return searchApi
      .getSearchCities(searchQuery)
      .then((res) => JSON.stringify(res))
      .then(() => setCityQuery());
  }

  const hint = response.map((ul) => {
    const li = ul.element.map((e) => (
      <li className="search__hint-list-element" key={e.name}>
        <Link to={e.link} className="search__hint-link">
          {e.name}
        </Link>
      </li>
    ));

    return (
      <div className="search__hint-list-container">
        <div className="search__hint-list-header" key={ul.title}>
          {/* Найдено в {label} */}
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

  useEffect(() => {
    if (query.length >= 3 || queryCity.length >= 1) {
      addResponseSearchCities(queryCity);
      setIsStartHint(true);
      dropDownBlock(elementToggle, true);
    } else {
      setIsStartHint(false);
      dropDownBlock(elementToggle, false);
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
        {response.length === 0 ? hintNotFound : hint}
      </div>
    </form>
  );
}
