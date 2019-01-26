import {
  SEARCH_CITY,
  SEARCH_CITY_ERROR,
  SEARCH_CITY_SUCCESS,
  FETCH_FORECAST,
  FETCH_FORECAST_ERROR,
  FETCH_FORECAST_SUCCESS
} from "./actionTypes";

const initialState = {
  city: {
    search: null,
    key: null,
    english: null,
    localized: null
  },
  isFetching: false,
  weatherData: null
};

function weather(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CITY:
      return Object.assign({}, state, {
        isFetching: true,
        city: {
          search: action.city
        }
      });
    case SEARCH_CITY_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        city: {
          search: state.city.search,
          english: action.EnglishName,
          localized: action.LocalizedName,
          key: action.Key
        }
      });
    case FETCH_FORECAST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_FORECAST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        weatherData: action.weatherData
      });
    case SEARCH_CITY_ERROR:
    case FETCH_FORECAST_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}

export default weather;
