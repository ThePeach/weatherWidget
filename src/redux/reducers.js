import {
  GET_WEATHER,
  GET_WEATHER_ERROR,
  GET_WEATHER_SUCCESS
} from "./actionTypes";

const initialState = {
  city: {
    search: null,
    id: null,
    name: null,
    contry: null
  },
  isFetching: false,
  weatherData: null
};

function weather(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER:
      return Object.assign({}, state, {
        isFetching: true,
        city: {
          search: action.city
        }
      });
    case GET_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        city: {
          search: state.city.search,
          ...action.data.city
        },
        weatherData: {
          text: action.data.text,
          timestamp: action.data.timestamp,
          coverage: action.data.coverage,
          precipitation: action.data.precipitation,
          temperature: action.data.temperature,
          wind: action.data.wind
        }
      });
    case GET_WEATHER_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        city: {
          search: state.city.search
        },
        error: action.error
      });
    default:
      return state;
  }
}

export default weather;
