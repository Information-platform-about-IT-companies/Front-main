import { LoadingStatus, modifyArray } from "services/constants";

const forms = { city: "Город", service: "Услуги" };

export const initialState = {
  cities: [],
  categories: [],
  checkedCities: [],
  checkedServices: [],
  filterServices: { cities: [], services: [] },
  isOpenFilter: false,
  forms,
  activeForm: "city",
  loadingStatus: LoadingStatus.idle,
  loadingError: null,
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "RESET_CITIES":
      return { ...state, checkedCities: [] };
    case "RESET_SERVICES":
      return { ...state, checkedServices: [] };
    case "FETCH_CITIES":
      return { ...state, cities: action.payload };
    case "FETCH_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_FILTERS":
      return { ...state, checkedCities: action.payload[0], checkedServices: action.payload[1] };
    case "CHANGE_CHECKED_CITIES":
      return { ...state, checkedCities: modifyArray(state.checkedCities, action.payload) };
    case "CHANGE_CHECKED_SERVICES":
      return { ...state, checkedServices: modifyArray(state.checkedServices, action.payload) };
    case "CHANGE_LOADING_STATUS":
      return { ...state, loadingStatus: action.payload };
    case "SET_LOADING_ERROR":
      return { ...state, loadingStatus: action.payload };
    case "CHANGE_ACTIVE_FORM":
      return { ...state, activeForm: action.payload };
    case "TOGGLE_FORM":
      return { ...state, isOpenFilter: !state.isOpenFilter };
    default:
      return state;
  }
};
