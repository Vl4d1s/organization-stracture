const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
// const authMiddleware = require("../../middleware/check-auth");
const reportsController = require("../../controllers/reports-controller");

// @route   POST api/reports
// @desc    Send new report to manager
// @access  Public
router.post(
  "/",
  [
    check("title", "Title is required").not().isEmpty(),
    check("description", "Password is required").not().isEmpty(),
    check("employeeId", "Manager id is required").not().isEmpty(),
    check("managerMail", "Employee's Mail is required").not().isEmpty(),
  ],
  reportsController.addReport
);

module.exports = router;