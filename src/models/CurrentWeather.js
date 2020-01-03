class CurrentWeather {
  constructor(rawdata) {
    this.minCelsius = this.calculateCelsius(rawdata.main.temp_min);
    this.maxCelsius = this.calculateCelsius(rawdata.main.temp_max);
    this.minFahrenheit = rawdata.main.temp_min;
    this.maxFahrenheit = rawdata.main.temp_max;
    this.humidity = rawdata.main.humidity;
    this.weather = rawdata.weather.main;
    this.weatherDescription = rawdata.weather.description;
    this.windSpeed = rawdata.wind.speed;
    this.windDirection = this.calculateWindDirection(rawdata.wind.deg);
  }

  calculateWindDirection(degree) {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const value = Math.floor((degree + 22.5) / 45);
    return directions[value % 8];
  }

  calculateCelsius(fahrenheit) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    // return Number.parseFloat(fahrenheit.toFixed(2));
    return Math.round(celsius * 1e2) / 1e2;
  }
}

module.exports = CurrentWeather;
