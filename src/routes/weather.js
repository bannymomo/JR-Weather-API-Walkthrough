const express = require("express");
const weather = require("../models/Weather");
const router = express.Router();
const axios = require("../utils/axios");
const APPID = process.env.APPID;

router.get("/:city/:countrycode", function(req, res) {
  const { countrycode, city } = req.params;
  weather
    .getData(city, countrycode)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(error) {
      return console.log(error);
    });
});

module.exports = router;
