const jwt = require("jsonwebtoken");
const config = require("config");

const jwtSecret = config.get("jwtSecret");
const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
  // if (req.method === "OPTIONS") {
  //   return next();
  // }
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      throw new Error("Authentication failed!");
    }
    const decodedToken = jwt.verify(token, jwtSecret);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed!", 403);
    return next(error);
  }
};
