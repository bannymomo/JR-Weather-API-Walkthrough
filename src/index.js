const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.send("hello");
});

app.get("/api/weather/:cc/:city", function(req, res) {
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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
