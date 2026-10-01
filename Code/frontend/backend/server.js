const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "AI FitTrack Backend is running"
    });
});

app.post("/api/fitness", (req, res) => {
    const { height, weight } = req.body;

    if (!height || !weight) {
        return res.status(400).json({
            message: "Height and weight are required"
        });
    }

    const heightInMeter = Number(height) / 100;
    const bmi = Number(weight) / (heightInMeter * heightInMeter);

    let status;

    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi < 25) {
        status = "Normal";
    } else if (bmi < 30) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    res.json({
        success: true,
        data: {
            height: Number(height),
            weight: Number(weight),
            bmi: Number(bmi.toFixed(2)),
            status: status
        }
    });
});

app.listen(PORT, () => {
    console.log(`AI FitTrack Backend running on http://localhost:${PORT}`);
});