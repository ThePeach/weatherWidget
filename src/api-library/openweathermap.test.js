import location from "./openweathermap";
import currentConditions from "./mockResponses/openweathermap-currentWeather";

describe("currentConditions() functionality", () => {
  it("returns the current weather conditions for the requested location", () => {
    const locationName = "Cairns";
    const expectedResult = location.dehydrateCurrentConditions(
      currentConditions.list[0]
    );
    const mockResponse = {
      json() {
        return currentConditions;
      }
    };

    global.fetch = jest.fn(() => Promise.resolve(mockResponse));

    return expect(location.currentConditions(locationName)).resolves.toEqual(
      expectedResult
    );
  });
});
