import { useEffect, useRef, useReducer } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
// services
import debounce from "services/debounce";
import { infoAPI } from "api/infoApi";
import { reducer, initialState, ACTION } from "store/reducers/searchReducer";
// UI-KIT
import Input from "UI-KIT/Input/Input";
import { Button } from "UI-KIT/Button/Button";
import Icon from "UI-KIT/Icons";
// Components
import DynamicHeightComponent from "components/DynamicHeightComponent/DynamicHeightComponent";
import SearchHintList from "./SearchHintList/SearchHintList";
// styles
import "./Search.scss";

export function Search({ extClassName }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // TODO переходим на страницу компании если выбрана компания

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    if (
      (!!state.query && (!state.response.services || state.response.services.length === 0)) ||
      (!!state.queryCity && state.responseCity.length === 0)
    ) {
      dispatch({ type: ACTION.SET_IS_HINT_OPEN, payload: false });
      dispatch({ type: ACTION.SET_IS_HINT_CITY_OPEN, payload: false });
      dispatch({ type: ACTION.SET_IS_HINT_NOT_FOUND_OPEN, payload: true });
      return;
    }
    if (!!state.query && state.response.services?.length !== 1) {
      dispatch({ type: ACTION.SET_IS_HINT_OPEN, payload: true });
      return;
    }
    const cityId = state.responseCity[0]?.id || "";
    const serviceId =
      state.response &&
      state.response.services &&
      state.response.services.length > 0 &&
      state.response.services[0].id
        ? state.response.services[0].id
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

  // запросы на сервер совпадающего ввода
  const addResponseSearch = async (search) => {
    try {
      const res = await infoAPI.searchServicesCompanies(search);
      dispatch({ type: ACTION.SET_RESPONSE, payload: res });
      dispatch({ type: ACTION.SET_IS_RESPONSE_NULL, payload: res });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Ошибка запроса по компаниям и услугам:", error);
    }
  };

  const addResponseSearchCity = async (searchCity) => {
    try {
      const res = await infoAPI.fetchCities(searchCity);
      dispatch({ type: ACTION.SET_RESPONSE_CITY, payload: res });
      dispatch({ type: ACTION.SET_IS_RESPONSE_CITY_NULL, payload: res });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Ошибка запроса по городам:", error);
    }
  };

  // выполнение отложенного поиска
  const debouncedSearch = useRef(
    debounce((search) => {
      if (search.length >= 3) {
        addResponseSearch(search);
        dispatch({ type: ACTION.SET_IS_HINT_NOT_FOUND_OPEN, payload: false });
        dispatch({ type: ACTION.SET_IS_HINT_OPEN, payload: true });
      } else {
        dispatch({ type: ACTION.SET_IS_HINT_OPEN, payload: false });
        dispatch({ type: ACTION.SET_RESPONSE, payload: {} });
      }
    }, 500),
  ).current;

  const debouncedSearchCity = useRef(
    debounce((search) => {
      if (search.length >= 3) {
        addResponseSearchCity(search);
        dispatch({ type: ACTION.SET_IS_HINT_NOT_FOUND_OPEN, payload: false });
        dispatch({ type: ACTION.SET_IS_HINT_CITY_OPEN, payload: true });
      } else {
        dispatch({ type: ACTION.SET_IS_HINT_CITY_OPEN, payload: false });
        dispatch({ type: ACTION.SET_RESPONSE_CITY, payload: [] });
      }
    }, 500),
  ).current;

  // выбор текста из выпадающей подсказки
  const handleSelect = (text) => {
    dispatch({ type: ACTION.SET_QUERY, payload: text });
    addResponseSearch(text); // необходимо для корректной логики функции кнопки «поиск», проверки длинны ответа
    dispatch({ type: ACTION.SET_RESPONSE_SELECTED, payload: text });
    dispatch({ type: ACTION.SET_IS_HINT_OPEN, payload: false });
    dispatch({ type: ACTION.SET_IS_RESPONSE_SELECTED, payload: true });
  };
  const handleSelectCity = (text) => {
    dispatch({ type: ACTION.SET_QUERY_CITY, payload: text });
    dispatch({ type: ACTION.SET_RESPONSE_CITY_SELECTED, payload: text });
    dispatch({ type: ACTION.SET_IS_HINT_CITY_OPEN, payload: false });
    dispatch({ type: ACTION.SET_IS_RESPONSE_CITY_SELECTED, payload: true });
  };

  // обработчики ввода
  const handleInputChange = (event) => {
    dispatch({ type: ACTION.SET_QUERY, payload: event.target.value });
    dispatch({ type: ACTION.SET_RESPONSE_SELECTED, payload: "" });
  };

  const handleInputCityChange = (event) => {
    dispatch({ type: ACTION.SET_QUERY_CITY, payload: event.target.value });
    dispatch({ type: ACTION.SET_RESPONSE_CITY_SELECTED, payload: "" });
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
    if (state.query || state.queryCity) {
      dispatch({ type: ACTION.SET_IS_BUTTON_ACTIVE, payload: true });
    } else {
      dispatch({ type: ACTION.SET_IS_BUTTON_ACTIVE, payload: false });
    }
  }, [state.query, state.queryCity]);

  useEffect(() => {
    if (!state.isResponseSelected) debouncedSearch(state.query);

    dispatch({ type: ACTION.SET_IS_RESPONSE_SELECTED, payload: false });

    return () => {
      debouncedSearch.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.query, debouncedSearch]);

  useEffect(() => {
    if (!state.isResponseCitySelected) debouncedSearchCity(state.queryCity);
    dispatch({ type: ACTION.SET_IS_RESPONSE_CITY_SELECTED, payload: false });

    return () => {
      debouncedSearchCity.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.queryCity, debouncedSearchCity]);

  return (
    <form className={`search ${extClassName}`} onSubmit={handleSubmitSearch}>
      <Input
        icon={<Icon icon="IconSearch" color="var(--icon-color)" size="24" />}
        extClassNameInput="search__input_1"
        onlyInput
        name="search"
        id="search"
        type="text"
        value={state.query || state.responseSelected}
        placeholder="Название компании или услуга"
        onChange={handleInputChange}
        onFocus={() => {
          dispatch({ type: ACTION.SET_IS_HINT_CITY_OPEN, payload: false });
          dispatch({ type: ACTION.SET_IS_HINT_NOT_FOUND_OPEN, payload: false });
        }}
        autoComplete="off"
      />
      <Input
        icon={<Icon icon="IconPin" color="var(--icon-color)" size="24" />}
        extClassNameInput="search__input_2"
        onlyInput
        name="city"
        id="city"
        value={state.queryCity || state.responseCitySelected}
        placeholder="Город"
        onChange={handleInputCityChange}
        onFocus={() => {
          dispatch({ type: ACTION.SET_IS_HINT_OPEN, payload: false });
          dispatch({ type: ACTION.SET_IS_HINT_NOT_FOUND_OPEN, payload: false });
        }}
        autoComplete="off"
      />
      <Button
        extClassName="search__input-button"
        size="medium"
        title="Поиск"
        fill
        disabled={!state.isButtonActive}
      />

      <DynamicHeightComponent extClassName="search__hint">
        {state.isHintOpen &&
          (state.isResponseNull === true ? hintNotFound() : hint(state.response))}
        {state.isHintCityOpen &&
          (state.isResponseCityNull === true ? hintNotFound() : hintCity(state.responseCity))}
        {state.isHintNotFoundOpen && hintNotFound()}
      </DynamicHeightComponent>
    </form>
  );
}

Search.propTypes = {
  extClassName: PropTypes.string,
};

Search.defaultProps = {
  extClassName: "",
};
