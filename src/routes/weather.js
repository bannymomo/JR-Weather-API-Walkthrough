const express = require("express");
const weather = require("../models/Weather");
const router = express.Router();
const axios = require("../utils/axios");
const responseFormatter = require("../utils/responseFormatter");
const APPID = process.env.APPID;

router.get("/:countrycode/:city", function(req, res) {
  const { countrycode, city } = req.params;
  const weatherType = req.query.weatherType;
  weather
    .getData(countrycode, city, weatherType)
    .then(function(response) {
      responseFormatter(res, 200, null, response);
    })
    .catch(function(error) {
      return console.log(error);
    });
});

module.exports = router;
