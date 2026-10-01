const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "AI FitTrack API is running" });
});

app.post("/api/suggestion", (req, res) => {
  const { goal, age, weight } = req.body;

  if (!goal || !age || !weight) {
    return res.status(400).json({
      message: "Goal, age and weight are required"
    });
  }

  res.json({
    message: "Fitness data saved successfully",
    data: {
      goal,
      age: Number(age),
      weight: Number(weight)
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});