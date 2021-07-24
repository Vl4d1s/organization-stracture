const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const config = require("config");

const HttpError = require("../models/http-error");
const User = require("../models/User");
const jwtSecret = config.get("jwtSecret");
const saltNumber = 12;
const jwtexpireTime = "1h";

const signup = async (req, res, next) => {
  console.log("sign up controller");
  // Check for errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  let existingUser;
  console.log("sign up controller2", req.body);

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
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      403
    );
    return next(error);
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
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      403
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      jwtexpireTime,
      { expiresIn: "1h" }
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

exports.signup = signup;
exports.login = login;
