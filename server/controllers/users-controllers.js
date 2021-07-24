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
  // Check for errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;
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
      "Could note create user, please try again.",
      500
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  // Saving the user
  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(
      "Could note save the user in the database.",
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

exports.signup = signup;
