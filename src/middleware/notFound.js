const responseFormatter = require("../utils/responseFormatter");

function notFound(req, res, next) {
  responseFormatter(res, 404, "Not found", null);
}

module.exports = notFound;
