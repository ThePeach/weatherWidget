import {
  GET_WEATHER,
  GET_WEATHER_ERROR,
  GET_WEATHER_SUCCESS
} from "./actionTypes";
import location from "../api-library/openweathermap";

// weather data related actions:
// { type: GET_WEATHER }
// { type: GET_WEATHER_ERROR, error: "string" }
// { type: GET_WEATHER_SUCCESS, response: {} }
export function requestData(city) {
  return {
    type: GET_WEATHER,
    city
  };
}

export function retrieveData(data) {
  return {
    type: GET_WEATHER_SUCCESS,
    data
  };
}

// thunk action creator
// chaining all the calls related to retrieving the weather data
export function fetchData(city) {
  return function(dispatch) {
    dispatch(requestData(city));
    return location.currentConditions(city).then(data => {
      dispatch(retrieveData(data));
    });
  };
}
