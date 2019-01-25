import { encodeQueryParams } from "./utils";

const APIKEY = process.env.REACT_APP_ACCUWEATHER_KEY;

const location = {
  searchCity(city) {
    const params = { apikey: APIKEY, q: city };
    const urlParams = encodeQueryParams(params);

    return fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search${urlParams}`
    )
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          return data[0];
        }
        return null;
      });
  },

  currentConditions(locationId, detailed = true) {
    const params = {
      apikey: APIKEY,
      details: detailed
    };
    const urlParams = encodeQueryParams(params);
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationId}${urlParams}`;

    return fetch(url)
      .then(response => response.json())
      .then(parsedData => {
        const data =
          (Array.isArray(parsedData) && parsedData.length) > 0
            ? parsedData[0]
            : parsedData;
        return this.dehydrateCurrentConditions(data);
      });
  },

  dehydrateCurrentConditions(detailedConditions) {
    const precipitation =
      detailedConditions.PrecipitationSummary.Precipitation.Metric;
    const temperature = detailedConditions.Temperature.Metric;
    const temperatureFeel = detailedConditions.RealFeelTemperature.Metric;
    const windSpeed = detailedConditions.Wind.Speed.Metric;
    const windDirection = detailedConditions.Wind.Direction;

    return {
      text: detailedConditions.WeatherText,
      precipitation: {
        isRaining: detailedConditions.HasPrecipitation,
        amount: precipitation.Value + precipitation.Unit
      },
      coverage: detailedConditions.CloudCover,
      temperature: {
        amount: temperature.Value + temperature.Unit,
        feel: temperatureFeel.Value + temperature.Unit
      },
      wind: {
        speed: windSpeed.Value + windSpeed.Unit,
        direction: windDirection.Degrees.English
      }
    };
  },

  userLocation() {}
};

export default location;
