const { getName, getCode } = require("country-list");
const responseFormatter = require("../utils/responseFormatter");

function countryCheck(req, res, next) {
  const { countrycode } = req.params;
  if (countrycode.length === 2 && getName(countrycode)) {
    return next();
  } else {
    if (getCode(countrycode)) {
      req.params.countrycode = getCode(countrycode);
      return next();
    }
  }

  return responseFormatter(
    res,
    400,
    "Invalid country code or country name",
    null
  );
}

module.exports = countryCheck;
