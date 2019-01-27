import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./actions";
import * as types from "./actionTypes";
import fetchMock from "fetch-mock";
import currentData from "../api-library/mockResponses/openweathermap-currentWeather.json";
import openWeatherMapAPI from "../api-library/openweathermap";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates GET_WEATHER_SUCCESS when fetching weather has been done", () => {
    fetchMock.getOnce("begin:http://api.openweathermap.org", currentData);
    const city = "london";
    const expectedActions = [
      { type: types.GET_WEATHER, city },
      {
        type: types.GET_WEATHER_SUCCESS,
        data: openWeatherMapAPI.dehydrateCurrentConditions(currentData.list[0])
      }
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(actions.fetchData(city)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
