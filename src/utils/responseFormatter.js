function responseFormatter(res, code, message, data) {
  res.status(code).json({
    status: code === 200 ? "success" : "error",
    message,
    data
  });
}

module.exports = responseFormatter;
