const City = require("./City");
const ForecastWeather = require("./ForecastWeather");
const CurrentWeather = require("./CurrentWeather");
const axios = require("../utils/axios");
const APPID = process.env.APPID;

class Weather {
  constructor() {}
  getData(countrycode, city, weatherType) {
    return Promise.all(getWeatherData(countrycode, city)).then(function(
      dataArray
    ) {
      const current = dataArray[0].data;
      const forecast = dataArray[1].data;
      const weather = {
        city: new City(forecast.city),
        current: new CurrentWeather(current),
        forecast: forecast.list.map(function(i) {
          return new ForecastWeather(i);
        })
      };

      filterData(weather, weatherType);
      return weather;
    });
  }
}

module.exports = new Weather();

function getWeatherData(countrycode, city) {
  const urls = ["/weather", "/forecast"];
  return urls.map(function(i) {
    return axios.get(i, {
      params: { q: `${city},${countrycode}`, APPID: `${APPID}` }
    });
  });
}

function filterData(weatherData, weatherType) {
  if (weatherType === "current") {
    delete weatherData.forecast;
  }
  if (weatherType === "forecast") {
    delete weatherData.current;
  }
}
