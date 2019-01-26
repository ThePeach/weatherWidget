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
          (Array.isArray(parsedData.list) && parsedData.list.length) > 0
            ? parsedData.list[0]
            : null;
        return this.dehydrateCurrentConditions(data);
      });
  },

  dehydrateCurrentConditions(conditions) {
    const precipitation = conditions.rain
      ? conditions.rain["1h"] || conditions.rain["3h"]
      : false;
    const temperature = conditions.main.temp;
    const windSpeed = conditions.wind.speed;
    const windDirection = conditions.wind.deg;

    return {
      timestamp: conditions.dt,
      text: conditions.weather[0].main,
      city: {
        name: conditions.name,
        id: conditions.id,
        country: conditions.sys.country
      },
      coverage: conditions.clouds.all + "%",
      precipitation: {
        isRaining: !!precipitation,
        amount: (precipitation ? precipitation : 0) + "mm"
      },
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
