const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const usersController = require("../controllers/users-controllers");

// @route   POST api/users/signup
// @desc    Signup Route
// @access  Public
router.post(
  "/signup",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password with >= 6 charecters").isLength({
      min: 6,
    }),
  ],
  usersController.signup
);

// @route   POST api/users/login
// @desc    Login Route
// @access  Public
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    check("password", "Please enter a password with >= 6 charecters").isLength({
      min: 6,
    }),
  ],
  usersController.login
);

module.exports = router;
