const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
// const authMiddleware = require("../../middleware/check-auth");
const tasksController = require("../../controllers/tasks-controller");

// @route   POST api/tasks
// @desc    Assign new task to employee
// @access  Public
router.post(
  "/",
  [
    check("title", "Title is required").not().isEmpty(),
    check("description", "Password is required").not().isEmpty(),
    check("managerId", "Manager id is required").not().isEmpty(),
    check("employeeMail", "Employee's Mail is required").not().isEmpty(),
    check("dueDate", "Employee's Mail is required").not().isEmpty(),
  ],
  tasksController.addTask
);

// @route   POST api/tasks
// @desc    Assign new task to employee
// @access  Public
router.get("/:email", tasksController.getTasks);
module.exports = router;
