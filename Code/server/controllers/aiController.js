const {
  generateWorkoutSuggestion,
} = require("../services/aiService");

const getWorkoutSuggestion = async (req, res) => {
  try {
    const { category, duration } = req.body;

    if (!category || !duration) {
      return res.status(400).json({
        message: "Category and duration are required",
      });
    }

    const suggestion = generateWorkoutSuggestion({
      category,
      duration,
    });

    res.status(200).json({
      suggestion,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to generate workout suggestion",
      error: error.message,
    });
  }
};

module.exports = {
  getWorkoutSuggestion,
};