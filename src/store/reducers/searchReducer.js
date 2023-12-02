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

export const initialState = {
  isButtonActive: false,
  isHintNotFoundOpen: false,

  query: "",
  response: {},
  isResponseNull: null,
  isHintOpen: false,
  responseSelected: "",
  isResponseSelected: false,

  queryCity: "",
  responseCity: [],
  isResponseCityNull: null,
  isHintCityOpen: false,
  responseCitySelected: "",
  isResponseCitySelected: false,
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "setIsButtonActive":
      return { ...state, isButtonActive: action.payload };
    case "setIsHintNotFoundOpen":
      return { ...state, isHintNotFoundOpen: action.payload };
    case "setQuery":
      return { ...state, query: action.payload };
    case "setResponse":
      return { ...state, response: action.payload };
    case "setIsResponseNull":
      return { ...state, isResponseNull: checkEmptyArrayProperties(action.payload) };
    case "setIsHintOpen":
      return { ...state, isHintOpen: action.payload };
    case "setResponseSelected":
      return { ...state, responseSelected: action.payload };
    case "setIsResponseSelected":
      return { ...state, isResponseSelected: action.payload };
    case "setQueryCity":
      return { ...state, queryCity: action.payload };
    case "setResponseCity":
      return { ...state, responseCity: action.payload };
    case "setIsResponseCityNull":
      return { ...state, isResponseCityNull: checkEmptyArrayProperties(action.payload) };
    case "setIsHintCityOpen":
      return { ...state, isHintCityOpen: action.payload };
    case "setResponseCitySelected":
      return { ...state, responseCitySelected: action.payload };
    case "setIsResponseCitySelected":
      return { ...state, isResponseCitySelected: action.payload };
    default:
      return state;
  }
}

export const ACTION = {
  SET_IS_BUTTON_ACTIVE: "setIsButtonActive",
  SET_IS_HINT_NOT_FOUND_OPEN: "setIsHintNotFoundOpen",
  SET_QUERY: "setQuery",
  SET_RESPONSE: "setResponse",
  SET_IS_RESPONSE_NULL: "setIsResponseNull",
  SET_IS_HINT_OPEN: "setIsHintOpen",
  SET_RESPONSE_SELECTED: "setResponseSelected",
  SET_IS_RESPONSE_SELECTED: "setIsResponseSelected",
  SET_QUERY_CITY: "setQueryCity",
  SET_RESPONSE_CITY: "setResponseCity",
  SET_IS_RESPONSE_CITY_NULL: "setIsResponseCityNull",
  SET_IS_HINT_CITY_OPEN: "setIsHintCityOpen",
  SET_RESPONSE_CITY_SELECTED: "setResponseCitySelected",
  SET_IS_RESPONSE_CITY_SELECTED: "setIsResponseCitySelected",
};
