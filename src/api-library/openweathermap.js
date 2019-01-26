import { encodeQueryParams } from "./utils";

const APIKEY = process.env.REACT_APP_OPENWEATHERMAP_KEY;

const location = {
  baseUrl: "http://api.openweathermap.org/data/2.5/",

  currentConditions(city) {
    const params = {
      APPID: APIKEY,
      q: city,
      units: "metric"
    };
    const urlParams = encodeQueryParams(params);
    const url = `${this.baseUrl}find${urlParams}`;

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

  dehydrateCurrentConditions(conditions) {
    const precipitation = conditions.rain["1h"] || conditions.rain["3h"];
    const temperature = conditions.main.temp;
    const windSpeed = conditions.wind.speed;
    const windDirection = conditions.wind.deg;

    return {
      timestamp: conditions.dt,
      city: {
        name: conditions.name,
        id: conditions.id,
        country: conditions.sys.country
      },
      text: conditions.weather.main,
      precipitation: {
        isRaining: !!precipitation,
        amount: precipitation + "mm"
      },
      coverage: conditions.clouds.all + "%",
      temperature: {
        amount: temperature + "ºC"
      },
      wind: {
        speed: windSpeed + "m/s",
        direction: windDirection + "º"
      }
    };
  }
};

export default location;
