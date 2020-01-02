const express = require("express");
const router = express.Router();
const axios = require("axios");
const APPID = process.env.APPID;

router.get("/:cc/:city", function(req, res) {
  const { countrycode, city } = req.params;
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${countrycode}&APPID=${APPID}`
    )
    .then(function(response) {
      res.send(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
});

module.exports = router;
