const HttpError = require("../models/http-error");
const User = require("../models/User");

const getUser = async (req, res, next) => {
  try {
    const existingUser = await User.findById(req.userData.userId)
      .populate({ path: "tasks", model: "Task" })
      .populate({
        path: "employees",
        model: "User",
        populate: { path: "tasks", model: "Task" },
      })
      .populate({ path: "manager", model: "User" })
      .populate({
        path: "reports",
        model: "Report",
        populate: { path: "givenBy", model: "User" },
      })
      .select("-password");

    res.json(existingUser);
  } catch (err) {
    const error = new HttpError("Server Error.", 500);
    return next(error);
  }
};

exports.getUser = getUser;

// const existingUser = await User.findById(req.userData.userId)
// .populate({ path: "tasks", model: "Taks" })
// .select("-password");
