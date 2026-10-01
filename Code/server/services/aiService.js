const generateWorkoutSuggestion = (workoutData) => {
  const { category, duration } = workoutData;

  if (category === "Strength") {
    return `Try a ${duration}-minute strength workout with push-ups, squats, and lunges.`;
  }

  if (category === "Cardio") {
    return `Try a ${duration}-minute cardio workout such as running, cycling, or jumping jacks.`;
  }

  if (category === "Yoga") {
    return `Try a ${duration}-minute yoga session with stretching and breathing exercises.`;
  }

  return `Try a ${duration}-minute workout based on your fitness goal.`;
};

module.exports = {
  generateWorkoutSuggestion,
};