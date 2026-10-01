const express = require("express");
const router = express.Router();

const { getWorkoutSummary } = require("../controllers/summaryController");

const protect = require("../middleware/authMiddleware");

router.get("/", protect, getWorkoutSummary);

module.exports = router;