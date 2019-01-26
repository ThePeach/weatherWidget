import {
  SEARCH_CITY,
  SEARCH_CITY_ERROR,
  SEARCH_CITY_SUCCESS,
  FETCH_FORECAST,
  FETCH_FORECAST_ERROR,
  FETCH_FORECAST_SUCCESS
} from "./actionTypes";
import location from "../api-library/accuweather";

// city related actions:
// { type: SEARCH_CITY }
// { type: SEARCH_CITY_ERROR, error: "string" }
// { type: SEARCH_CITY_SUCCESS, response: {} }
export function searchCity(city) {
  return {
    type: SEARCH_CITY,
    city
  };
}

export function retrieveCity(cityData) {
  return {
    type: SEARCH_CITY_SUCCESS,
    LocalizedName: cityData.LocalizedName,
    EnglishName: cityData.EnglishName,
    Key: cityData.Key
  };
}

// thunk action creator
// chaining all the calls related to retrieving a city
export function fetchCity(city) {
  return function(dispatch) {
    dispatch(searchCity(city));
    return location.searchCity(city).then(data => {
      dispatch(retrieveCity(data));
    });
  };
}

// weather data related actions:
// { type: FETCH_FORECAST }
// { type: FETCH_FORECAST_ERROR, error: "string" }
// { type: FETCH_FORECAST_SUCCESS, response: {} }
export function requestData(cityId) {
  return {
    type: FETCH_FORECAST
  };
}

export function retrieveData(weatherData) {
  return {
    type: FETCH_FORECAST_SUCCESS,
    weatherData
  };
}

// thunk action creator
// chaining all the calls related to retrieving the weather data
export function fetchData(cityId) {
  return function(dispatch) {
    dispatch(requestData(cityId));
    return location.currentConditions(cityId).then(data => {
      dispatch(retrieveData(data));
    });
  };
}
