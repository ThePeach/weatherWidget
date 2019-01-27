import reducer from "./reducers";
import * as types from "./actionTypes";

describe("weather reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      city: { contry: null, id: null, name: null, search: null },
      isFetching: false,
      weatherData: null
    });
  });

  it("should handle GET_WEATHER", () => {
    const firstCity = "London";
    expect(
      reducer([], {
        type: types.GET_WEATHER,
        city: firstCity
      })
    ).toEqual({
      isFetching: true,
      city: {
        search: firstCity
      }
    });

    const secondCity = "Leeds";

    expect(
      reducer(
        {
          isFetching: true,
          city: {
            search: firstCity,
            name: firstCity,
            country: "UK"
          },
          weatherData: {}
        },
        {
          type: types.GET_WEATHER,
          city: secondCity
        }
      )
    ).toEqual({
      isFetching: true,
      city: {
        search: secondCity
      },
      weatherData: {}
    });
  });
});
