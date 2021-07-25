const express = require("express");

const router = express.Router();
const authMiddleware = require("../../middleware/check-auth");
const authController = require("../../controllers/auth-controller");

// @route   GET api/auth
// @desc    Getting the current user
// @access  Private
router.get("/", authMiddleware, authController.getUser);

module.exports = router;
