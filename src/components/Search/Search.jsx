import { useEffect, useState, useRef } from "react";

import { infoAPI } from "api/infoApi";
import Input from "UI-KIT/Input/Input";
import { Button } from "UI-KIT/Button/Button";
import Icon from "UI-KIT/Icons";
import DynamicHeightComponent from "components/DynamicHeightComponent/DynamicHeightComponent";

import "./Search.scss";
import SearchHintList from "./SearchHintList/SearchHintList";

export function Search({ extClassName, ...props }) {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState({});
  const [isResponseNull, setIsResponseNull] = useState(null);
  const [isHintOpen, setIsHintOpen] = useState(false);
  const [responseSelected, responseQuerySelected] = useState("");
  const [queryCity, setCityQuery] = useState("");
  // const [responseCity, setResponseCity] = useState([]);
  // const [responseCitySelected, responseCityQuerySelected] = useState("");

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    console.log("нажата клавиша поиск");
    // TODO переходим на страницу фильтра с выбранными параметрами
    // TODO переходим на страницу компании если выбрана компания
  };

  // проверка свойств объекта, что они пустые массивы
  const checkEmptyArrayProperties = (obj) => {
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i += 1) {
      const value = obj[keys[i]];

      if (Array.isArray(value) && value.length !== 0) return false;
      if (typeof value === "object" && !checkEmptyArrayProperties(value)) return false;
      if (typeof value === "string" || typeof value === "number" || typeof value === "boolean")
        return false;
    }
    return true;
  };

  // функции запроса на сервер совпадающего ввода
  const addResponseSearch = async (search) => {
    try {
      const res = await infoAPI.searchServicesCompanies(search);
      setResponse(res);
      setIsResponseNull(checkEmptyArrayProperties(res));
    } catch (error) {
      console.error("Ошибка запроса по компаниям и услугам:", error);
    }
  };

  // async function addResponseSearchCities(searchQuery) {
  //   try {
  //     const res = await infoAPI.fetchCities(searchQuery);
  //     setResponseCity(res);
  //   } catch (error) {
  //     console.error("Ошибка запроса по городам:", error);
  //   }
  // }

  // декоратор отложения выполнения функций
  const debounce = (func, delay) => {
    let timeout;
    const debounced = function (...args) {
      const context = this;

      const execute = () => {
        timeout = null;
        func.apply(context, args);
      };

      if (!timeout) {
        timeout = setTimeout(execute, delay);
      }
    };

    return debounced;
  };

  //
  const debouncedSearch = useRef(
    debounce((search) => {
      if (search.length >= 3) {
        addResponseSearch(search);
        setIsButtonActive(true);
        setIsHintOpen(true);
      } else {
        setIsButtonActive(false);
        setIsHintOpen(false);
        setResponse({});
      }
    }, 500),
  ).current;

  const handleSelect = (text) => {
    responseQuerySelected(text);
  };

  // выпадающие подсказки
  const hintNotFound = () => <SearchHintList title="По вашему запросу ничего не найдено" />;

  const hint = (res) =>
    Object.keys(res).map((title) => {
      if (res[title].length === 0) {
        return null;
      }
      let titleName;
      switch (title) {
        case "services":
          titleName = "услугах";
          break;
        case "companies":
          titleName = "компаниях";
          break;
        default:
          titleName = title;
      }

      return (
        <SearchHintList title={titleName} optionsObjectList={res[title]} onSelect={handleSelect} />
      );
    });

  // function hintCity(res) {
  //   if (!res) {
  //     return null;
  //   }
  //   const cityNames = res.map((city) => (
  //     <li className="search__hint-list-element" key={city.id}>
  //       <div className="search__hint-list-element-text">{city.name}</div>
  //     </li>
  //   ));

  //   return (
  //     <div className="search__hint-list-container">
  //       <div className="search__hint-list-header" key="cities">
  //         Найдено в городах
  //       </div>
  //       <ul className="search__hint-list">{cityNames}</ul>
  //     </div>
  //   );
  // }

  useEffect(() => {
    if (query || queryCity) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [query, queryCity]);

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  // useEffect(() => {
  //   if (queryCity.length >= 3) {
  //     addResponseSearchCities(queryCity);
  //     dropDownBlock(elementToggle, true);
  //   } else {
  //     setResponseCity([]);
  //     dropDownBlock(elementToggle, false);
  //   }
  // }, [queryCity]);

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
        autocomplete="off"
      />
      <Input
        icon={<Icon icon="IconPin" color="#4e4cbf" size="24" />}
        extClassNameInput="search__input_2"
        onlyInput
        name="city"
        id="city"
        placeholder="Город"
        onChange={(event) => setCityQuery(event.target.value)}
        autocomplete="off"
      />
      <Button
        extClassName="search__input-button"
        size="medium"
        title="Поиск"
        fill
        disabled={!isButtonActive}
      />

      {isHintOpen && (
        <DynamicHeightComponent extClassName="search__hint">
          {isResponseNull === true && hintNotFound()}
          {hint(response)}
        </DynamicHeightComponent>
      )}
      {/* <div ref={wrappedHintCity} className="search__hint">
        {hint(response) === && responseCity.length === 0 && hintNotFound}
        {responseCity.length === 0 ? "" : hintCity(responseCity)}
      </div> */}
    </form>
  );
}
