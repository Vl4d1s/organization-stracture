const HttpError = require("../models/http-error");
const User = require("../models/User");

const getUser = async (req, res, next) => {
  try {
    const existingUser = await User.findById(req.userData.userId).select(
      "-password"
    );
    res.json(existingUser);
  } catch (err) {
    const error = new HttpError("Server Error.", 500);
    return next(error);
  }
};

exports.getUser = getUser;
