const express = require("express");
const router = express.Router();
const axios = require("../utils/axios");
const APPID = process.env.APPID;

router.get("/:cc/:city", function(req, res) {
  const { countrycode, city } = req.params;
  axios
    .get(`/weather?q=${city},${countrycode}&APPID=${APPID}`)
    .then(function(response) {
      res.send(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
});

module.exports = router;
