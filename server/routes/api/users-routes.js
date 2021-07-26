const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const usersController = require("../../controllers/users-controllers");

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

// @route   POST api/users/manager
// @desc    Update manager to employee
// @access  Public
router.post(
  "/manager",
  [
    check("managerId", "Manager's id is required").not().isEmpty(),
    check("employeeEmail", "Employee's email is required").not().isEmpty(),
  ],
  usersController.updateManager
);

// @route   POST api/users/employee
// @desc    Update manager employees
// @access  Public
router.post(
  "/employee",
  [
    check("managerEmail", "Manager's email is required").not().isEmpty(),
    check("employeeId", "Employee's id is required").not().isEmpty(),
  ],
  usersController.updateManagerEmployee
);

module.exports = router;
