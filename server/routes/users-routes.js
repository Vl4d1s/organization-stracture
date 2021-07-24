const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const usersController = require("../controllers/users-controllers");

// @route   POST api/users
// @desc    Sign up Route
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
  usersController.signup
);

module.exports = router;
