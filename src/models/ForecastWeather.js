const CurrentWeather = require("./CurrentWeather");

class ForecastWeather extends CurrentWeather {
  constructor(rawdata) {
    super(rawdata);
    this.time = rawdata.dt;
  }
}
module.exports = ForecastWeather;
