const ApiError = require("../exceptions/apiError");

module.exports = function (err, req, res, next) {
  console.log(req);

  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }

  return res.status(500).json({ message: "server error" });
};
