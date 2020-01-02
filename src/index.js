require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const routes = require("./routes");
app.use("", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});
