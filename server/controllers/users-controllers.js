const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const config = require("config");

const HttpError = require("../models/http-error");
const User = require("../models/User");
const jwtSecret = config.get("jwtSecret");
const saltNumber = 10;
const jwtexpireTime = "1h";

const signup = async (req, res, next) => {
  // Check for errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, role, position, email, password } = req.body;
  let existingUser;

  // See if user exists
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, plaese try again later.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "User exists already, please login instead.",
      422
    );
    return next(error);
  }

  // Creating hash password
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, saltNumber);
  } catch (err) {
    const error = new HttpError(
      "Could not create user, please try again.",
      500
    );
    return next(error);
  }

  let createdUser;
  try {
    createdUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      role,
      position,
    });
  } catch (err) {
    const error = new HttpError(
      "Could not create user schema in the database.",
      500
    );
    return next(error);
  }

  // Saving the user
  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(
      "Could not save the user in the database.",
      500
    );
    return next(error);
  }

  // Creating the jwt token
  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      jwtSecret,
      { expiresIn: jwtexpireTime }
    );
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  res.status(201).json({ token });
};

const login = async (req, res, next) => {
  // Check for errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!existingUser) {
    return res.status(400).json({
      errors: [{ msg: "Invalid Login details. The user not exists" }],
    });
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "Could not log you in, please check your credentials and try again.",
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    return res
      .status(400)
      .json({ errors: [{ msg: "Invalid Password. Please try again." }] });
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      jwtSecret,
      { expiresIn: jwtexpireTime }
    );
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  res.json({
    userId: existingUser.id,
    email: existingUser.email,
    token: token,
  });
};

const updateManager = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
  }

  const { managerId, employeeEmail } = req.body;

  let existingEmployee;
  try {
    existingEmployee = await User.findOne({ email: employeeEmail });
  } catch (err) {
    const error = new HttpError(
      "Cannot find the employee, could not add the task.",
      500
    );
    return next(error);
  }

  existingEmployee.manager = managerId;

  try {
    await existingEmployee.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update place.",
      500
    );
    return next(error);
  }

  res.status(201).json({ managerId });
};

const updateManagerEmployee = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
  }

  const { managerEmail, employeeId } = req.body;

  let existingManager;
  try {
    existingManager = await User.findOne({ email: managerEmail });
  } catch (err) {
    const error = new HttpError(
      "Cannot find the employee, could not add the task.",
      500
    );
    return next(error);
  }
  existingManager.employees.push(employeeId);

  try {
    await existingManager.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update place.",
      500
    );
    return next(error);
  }

  res.status(201).json({ employeeId });
};

exports.signup = signup;
exports.login = login;
exports.updateManager = updateManager;
exports.updateManagerEmployee = updateManagerEmployee;
