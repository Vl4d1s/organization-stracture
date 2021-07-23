const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const User = require("../models/User");
const saltNumber = 12;

// @route   POST api/users
// @desc    Test route
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password with >= 6 charecters").isLength({
      min: 6,
    }),
  ],
  async (req, res, next) => {
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
    // retuen the jwt
    res.send("User registered");
  }
);

module.exports = router;
