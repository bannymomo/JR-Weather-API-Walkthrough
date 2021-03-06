require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const helmet = require("helmet");
app.use(helmet());

const morgan = require("morgan");
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("common"));
}

const logger = require("./utils/logger");
const routes = require("./routes");
const notFoundHandler = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
app.use("", routes);
app.use(errorHandler);
app.use(notFoundHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  logger.info(`Server listening on port ${PORT}`);
});
