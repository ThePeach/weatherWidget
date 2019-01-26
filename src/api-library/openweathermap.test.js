import location from "./openweathermap";
import currentConditions from "./mockResponses/openweathermap-currentWeather";

describe("currentConditions() functionality", () => {
  it("returns the current weather conditions for the requested location", () => {
    const locationId = 328328;
    const expectedResult = location.dehydrateCurrentConditions(
      currentConditions
    );
    const mockResponse = {
      json() {
        return currentConditions;
      }
    };

    global.fetch = jest.fn(() => Promise.resolve(mockResponse));

    return expect(location.currentConditions(locationId)).resolves.toEqual(
      expectedResult
    );
  });
});
