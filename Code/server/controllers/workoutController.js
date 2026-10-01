const Workout = require("../models/Workout");

const createWorkout = async (req, res) => {
  try {
    const {
      user,
      workoutName,
      category,
      duration,
      caloriesBurned,
      workoutDate
    } = req.body;

    if (
      !user ||
      !workoutName ||
      !category ||
      !duration ||
      !caloriesBurned ||
      !workoutDate
    ) {
      return res.status(400).json({
        success: false,
        message: "All workout fields are required"
      });
    }

    const workout = await Workout.create({
      user,
      workoutName,
      category,
      duration,
      caloriesBurned,
      workoutDate
    });

    res.status(201).json({
      success: true,
      message: "Workout created successfully",
      workout
    });
  } catch (error) {
    console.error("Create workout error:", error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createWorkout
};