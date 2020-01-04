const express = require("express");
const weather = require("../models/Weather");
const router = express.Router();
const axios = require("../utils/axios");
const responseFormatter = require("../utils/responseFormatter");
const APPID = process.env.APPID;
const countryCheck = require("../middleware/countryCheck");

router.get("/:countrycode/:city", countryCheck, function(req, res, next) {
  const { countrycode, city } = req.params;
  const weatherType = req.query.weatherType;
  weather
    .getData(countrycode, city, weatherType)
    .then(function(response) {
      responseFormatter(res, 200, null, response);
    })
    .catch(function(error) {
      return next(error);
    });
});

module.exports = router;
