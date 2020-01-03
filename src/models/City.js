class City {
  constructor(rawdata) {
    this.name = rawdata.name;
    this.coord = rawdata.coord;
    this.country = rawdata.country;
    this.population = rawdata.population;
  }
}

module.exports = City;
