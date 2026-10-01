const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const router = express.Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

router.post("/", async (req, res) => {
  try {
    const { goal, age, weight } = req.body;

    if (!goal || !age || !weight) {
      return res.status(400).json({
        success: false,
        message: "Goal, age and weight are required"
      });
    }

    const prompt = `
You are an AI fitness assistant.

User details:
Goal: ${goal}
Age: ${age}
Weight: ${weight} kg

Give a simple and safe fitness suggestion.

Include:
1. Workout suggestion
2. Food suggestion
3. Daily water suggestion

Keep the answer short and easy to understand.
`;

    let response;

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        console.log(`Gemini attempt ${attempt}`);

        response = await ai.models.generateContent({
          model: "gemini-3.8-flash",
          contents: prompt
        });

        break;

      } catch (error) {
        console.error(`Gemini attempt ${attempt} failed:`, error.message);

        if (attempt === 3) {
          throw error;
        }

        await wait(attempt * 5000);
      }
    }

    res.json({
      success: true,
      suggestion: response.text
    });

  } catch (error) {
    console.error("Gemini API Error:", error);

    res.status(500).json({
      success: false,
      message: "Gemini service is temporarily unavailable. Please try again."
    });
  }
});

module.exports = router;