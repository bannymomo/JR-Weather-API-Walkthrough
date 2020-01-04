const express = require("express");
const router = express.Router();
const weatherRoutes = require("./routes/weather");
const responseFormatter = require("./utils/responseFormatter");

router.get("/", function(req, res) {
  responseFormatter(res, 200, "Welcome to weather api.", null);
});

router.use("/api/weather", weatherRoutes);

module.exports = router;
