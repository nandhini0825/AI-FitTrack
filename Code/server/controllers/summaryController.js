const Workout = require("../models/Workout");

const getWorkoutSummary = async (req, res) => {
  try {
    const workouts = await Workout.find({
      user: req.user.userId,
    });

    const totalWorkouts = workouts.length;

    const totalDuration = workouts.reduce(
      (total, workout) => total + workout.duration,
      0
    );

    const totalCaloriesBurned = workouts.reduce(
      (total, workout) => total + workout.caloriesBurned,
      0
    );

    res.status(200).json({
      totalWorkouts,
      totalDuration,
      totalCaloriesBurned,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get workout summary",
      error: error.message,
    });
  }
};

module.exports = {
  getWorkoutSummary,
};