import location from "./location";
import currentConditions from "./mockResponses/currentConditions";

describe("searchCity functionality", () => {
  it("calls fetch() and resolves to the right data", () => {
    const city = "london";
    const expectedResultArray = [
      {
        Key: 328328,
        LocalizedName: "London",
        EnglishName: "London"
      }
    ];
    global.fetch = jest.fn(() => Promise.resolve(expectedResultArray));

    return expect(location.searchCity(city)).resolves.toEqual(
      expectedResultArray[0]
    );
  });

  it("returns null if there is no data", () => {
    const city = "asd";
    const expectedResult = null;
    const emptyResult = [];
    global.fetch = jest.fn(() => Promise.resolve(emptyResult));

    return expect(location.searchCity(city)).resolves.toEqual(expectedResult);
  });
});

describe("currentConditions() functionality", () => {
  it("returns the current weather conditions for the requested location", () => {
    const locationId = 328328;
    const expectedResult = location.dehydrateCurrentConditions(
      currentConditions[0]
    );

    global.fetch = jest.fn(() => Promise.resolve(currentConditions));

    return expect(location.currentConditions(locationId)).resolves.toEqual(
      expectedResult
    );
  });
});
