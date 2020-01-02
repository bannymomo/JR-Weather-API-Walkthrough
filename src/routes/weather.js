const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:cc/:city", function(req, res) {
  const { countrycode, city } = req.params;
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${countrycode}&APPID=2e23d2a231c9054fd090aed70be4c12b`
    )
    .then(function(response) {
      res.send(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
});

module.exports = router;
