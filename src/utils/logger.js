const { createLogger, format, transports } = require("winston");
const path = require("path");
const env = process.env.NODE_ENV;

const logger = createLogger({
  level: env === "production" ? "info" : "debug",
  format: format.combine(
    format.colorize(),
    format.label({ lable: path.basename(module.parent.filename) }),
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(function(info) {
      return `${info.timestamp} [${info.lable}] ${info.level}: ${info.message}`;
    })
  ),
  transports: [new transports.Console()]
});

module.exports = logger;
