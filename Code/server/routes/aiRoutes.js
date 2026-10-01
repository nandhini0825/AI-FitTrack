const express = require("express");
const router = express.Router();

const {
  getWorkoutSuggestion,
} = require("../controllers/aiController");

const protect = require("../middleware/authMiddleware");

router.post("/suggestion", protect, getWorkoutSuggestion);

module.exports = router;