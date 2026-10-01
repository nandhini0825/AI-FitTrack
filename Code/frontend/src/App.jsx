const response = await fetch("http://localhost:5000/api/fitness", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    goal: goal,
    age: Number(age),
    weight: Number(weight),
    height: Number(height),
    bmi: Number(bmi),
    bmiStatus: bmiStatus
  })
});