import { useEffect, useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import debounce from "services/debounce";

import { infoAPI } from "api/infoApi";
import Input from "UI-KIT/Input/Input";
import { Button } from "UI-KIT/Button/Button";
import Icon from "UI-KIT/Icons";
import DynamicHeightComponent from "components/DynamicHeightComponent/DynamicHeightComponent";
import SearchHintList from "./SearchHintList/SearchHintList";

import "./Search.scss";

export function Search({ extClassName, ...props }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isButtonActive, setIsButtonActive] = useState(false);

  const [query, setQuery] = useState("");
  const [response, setResponse] = useState({});
  const [isResponseNull, setIsResponseNull] = useState(null);
  const [isHintOpen, setIsHintOpen] = useState(false);
  const [responseSelected, setResponseSelected] = useState("");
  const [isResponseSelected, setIsResponseSelected] = useState(false);

  const [queryCity, setQueryCity] = useState("");
  const [responseCity, setResponseCity] = useState([]);
  const [isResponseCityNull, setIsResponseCityNull] = useState(null);
  const [isHintCityOpen, setIsHintCityOpen] = useState(false);
  const [responseCitySelected, setResponseCitySelected] = useState("");
  const [isResponseCitySelected, setIsResponseCitySelected] = useState(false);

  const navigate = useNavigate();

  // TODO переходим на страницу компании если выбрана компания

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    const cityId = responseCity[0]?.id || "";
    const serviceId =
      response && response.services && response.services.length > 0 && response.services[0].id
        ? response.services[0].id
        : "";

    const buildSearchParams = (city, service) => {
      let params = "";
      if (city) params += `cities=${encodeURIComponent(`[${city}]`)}`;
      if (service) {
        params += city
          ? `&services=${encodeURIComponent(`[${service}]`)}`
          : `services=${encodeURIComponent(`[${service}]`)}`;
      }
      return params;
    };
    const params = buildSearchParams(cityId, serviceId);
    navigate(`/filter?${params}`);
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

  // запросы на сервер совпадающего ввода
  const addResponseSearch = async (search) => {
    try {
      const res = await infoAPI.searchServicesCompanies(search);
      setResponse(res);
      setIsResponseNull(checkEmptyArrayProperties(res));
    } catch (error) {
      console.error("Ошибка запроса по компаниям и услугам:", error);
    }
  };

  const addResponseSearchCity = async (searchCity) => {
    try {
      const res = await infoAPI.fetchCities(searchCity);
      setResponseCity(res);
      setIsResponseCityNull(checkEmptyArrayProperties(res));
    } catch (error) {
      console.error("Ошибка запроса по городам:", error);
    }
  };

  // выполнение отложенного поиска
  const debouncedSearch = useRef(
    debounce((search) => {
      if (search.length >= 3) {
        addResponseSearch(search);
        setIsHintOpen(true);
      } else {
        setIsHintOpen(false);
        setResponse({});
      }
    }, 500),
  ).current;

  const debouncedSearchCity = useRef(
    debounce((search) => {
      if (search.length >= 3) {
        addResponseSearchCity(search);
        setIsHintCityOpen(true);
      } else {
        setIsHintCityOpen(false);
        setResponseCity([]);
      }
    }, 500),
  ).current;

  // функция выбора текста из выпадающей подсказки
  const handleSelect = (text) => {
    setQuery(text);
    setResponseSelected(text);
    setIsHintOpen(false);
    setIsResponseSelected(true);
  };

  const handleSelectCity = (text) => {
    setQueryCity(text);
    setResponseCitySelected(text);
    setIsHintCityOpen(false);
    setIsResponseCitySelected(true);
  };

  // функции обработчиков ввода
  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setResponseSelected("");
  };

  const handleInputCityChange = (event) => {
    setQueryCity(event.target.value);
    setResponseCitySelected("");
  };

  // выпадающие подсказки
  const hintNotFound = () => <SearchHintList title="По вашему запросу ничего не найдено" />;

  const hint = (res) =>
    Object.keys(res).map((title) => {
      if (res[title].length === 0) return null;

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

  function hintCity(res) {
    if (res.length === 0) return null;

    return <SearchHintList title="городах" optionsObjectList={res} onSelect={handleSelectCity} />;
  }

  useEffect(() => {
    if (query || queryCity) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [query, queryCity]);

  useEffect(() => {
    if (!isResponseSelected) debouncedSearch(query);

    setIsResponseSelected(false);

    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);

  useEffect(() => {
    if (!isResponseCitySelected) debouncedSearchCity(queryCity);

    setIsResponseCitySelected(false);

    return () => {
      debouncedSearchCity.cancel();
    };
  }, [queryCity, debouncedSearchCity]);

  return (
    <form className={`search ${extClassName}`} onSubmit={handleSubmitSearch}>
      <Input
        icon={<Icon icon="IconSearch" color="#4e4cbf" size="24" />}
        extClassNameInput="search__input_1"
        onlyInput
        name="search"
        id="search"
        type="text"
        value={query || responseSelected}
        placeholder="Название компании или услуга"
        onChange={handleInputChange}
        onFocus={() => setIsHintCityOpen(false)}
        autocomplete="off"
      />
      <Input
        icon={<Icon icon="IconPin" color="#4e4cbf" size="24" />}
        extClassNameInput="search__input_2"
        onlyInput
        name="city"
        id="city"
        value={queryCity || responseCitySelected}
        placeholder="Город"
        onChange={handleInputCityChange}
        onFocus={() => setIsHintOpen(false)}
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
      {isHintCityOpen && (
        <DynamicHeightComponent extClassName="search__hint">
          {isResponseCityNull === true && hintNotFound()}
          {hintCity(responseCity)}
        </DynamicHeightComponent>
      )}
    </form>
  );
}
