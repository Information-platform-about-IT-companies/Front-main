import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import Input from "UI-KIT/Input/Input";
import { Button } from "UI-KIT/Button/Button";
import Icon from "UI-KIT/Icons";
import dropDownBlock from "services/dropDown";

import "./Search.scss";
import searchApi from "services/SearchApi";

export function Search({ extClassName, ...props }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isStartHint, setIsStartHint] = useState(false);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState({});
  const [responseSelected, responseQuerySelected] = useState("");
  const [queryCity, setCityQuery] = useState("");
  const [responseCity, setResponseCity] = useState([]);
  const [responseCitySelected, responseCityQuerySelected] = useState("");
  const elementToggle = useRef(null);

  function handleSubmitSearch(event) {
    event.preventDefault();
    console.log("начинаем поиск");
    // TODO переходим на страницу фильтра с выбранными параметрами
    // TODO переходим на страницу компании если выбрана компания
  }

  // TODO функция запроса компаний и сервисов

  function addResponseSearch(search) {
    setResponse({
      companies: [
        {
          id: 1,
          name: "ВебЧел",
        },
        {
          id: 2,
          name: "Веб-кек",
        },
        {
          id: 3,
          name: "Веб_шмяк",
        },
      ],
      services: [
        {
          id: 17,
          name: "Веб-дизайн",
        },
        {
          id: 27,
          name: "Веб-разработка",
        },
      ],
    });
  }

  function addResponseSearchCities(searchQuery) {
    setResponseCity([
      {
        id: 1,
        name: "Веб-бург",
      },
      {
        id: 2,
        name: "ВебГрад",
      },
      {
        id: 3,
        name: "Веб_город",
      },
    ]);
  }

  // async function addResponseSearchCities(searchQuery) {
  //   console.log(searchApi.getSearchCities(searchQuery));
  //   return searchApi
  //     .getSearchCities(searchQuery)
  //     .then((res) => JSON.stringify(res))
  //     .then(() => setResponseCity());
  // }

  function hintCity(res) {
    if (!res) {
      return null;
    }
    const cityNames = res.map((city) => (
      <li className="search__hint-list-element" key={city.id}>
        {city.name}
      </li>
    ));

    return (
      <div className="search__hint-list-container">
        <div className="search__hint-list-header" key="cities">
          Найдено в городах
        </div>
        <ul className="search__hint-list">{cityNames}</ul>
      </div>
    );
  }

  // function hint(res) {
  // res.map((ul) =>
  //   const li = ul.element.map((e) => (
  //     <li className="search__hint-list-element" key={e.name}>
  //       <Link to={e.link} className="search__hint-link">
  //         {e.name}
  //       </Link>
  //     </li>
  //   ));

  //   return (
  //     <div className="search__hint-list-container">
  //       <div className="search__hint-list-header" key={ul.title}>
  //         {/* Найдено в {label} */}
  //       </div>
  //       <ul className="search__hint-list">{li}</ul>
  //     </div>
  //   );
  // });

  const hintNotFound = (
    <div className="search__hint-list-container">
      <div className="search__hint-list-header search__hint-list-header_no-found">
        По вашему запросу ничего не найдено
      </div>
    </div>
  );

  useEffect(() => {
    if (query.length >= 3) {
      addResponseSearch(query);
      setIsStartHint(true);
      dropDownBlock(elementToggle, true);
      setIsButtonDisabled(false);
    } else {
      setIsStartHint(false);
      dropDownBlock(elementToggle, false);
      setIsButtonDisabled(true);
      setResponse({});
    }

    if (query || queryCity) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [query]);

  useEffect(() => {
    if (queryCity.length >= 3) {
      addResponseSearchCities(queryCity);
      setIsStartHint(true);
      dropDownBlock(elementToggle, true);
    } else {
      setResponseCity([]);
      setIsStartHint(false);
      dropDownBlock(elementToggle, false);
    }

    if (query || queryCity) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [queryCity]);

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
        {response.length === 0 && responseCity.length === 0 && hintNotFound}
        {/* {response.length === 0 ? "" : hint(response)} */}
        {responseCity.length === 0 ? "" : hintCity(responseCity)}
      </div>
    </form>
  );
}
