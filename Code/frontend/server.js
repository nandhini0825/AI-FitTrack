function getSuggestion() {

    const goal = document.getElementById("goal").value;
    const age = document.getElementById("age").value;
    const weight = Number(document.getElementById("weight").value);
    const height = Number(document.getElementById("height").value);

    const suggestion = document.getElementById("suggestion");

    if (!age || !weight || !height) {
        suggestion.innerText =
            "Please enter age, weight and height first.";
        return;
    }

    const heightInMeter = height / 100;
    const bmi = weight / (heightInMeter * heightInMeter);

    let bmiStatus;

    if (bmi < 18.5) {
        bmiStatus = "Below reference range";
    }
    else if (bmi < 25) {
        bmiStatus = "Within reference range";
    }
    else if (bmi < 30) {
        bmiStatus = "Above reference range";
    }
    else {
        bmiStatus = "High reference range";
    }

    let advice = "";

    if (goal === "Weight Loss") {

        advice = `
            1. Stay physically active regularly.<br>
            2. Choose balanced and nutritious foods.<br>
            3. Limit highly processed foods and sugary drinks.<br>
            4. Get adequate sleep and rest.<br>
            5. Increase activity gradually.
        `;

    }
    else if (goal === "Muscle Gain") {

        advice = `
            1. Include regular strength-based exercise.<br>
            2. Eat a balanced diet with adequate protein.<br>
            3. Drink enough water throughout the day.<br>
            4. Allow enough rest and recovery.<br>
            5. Increase exercise gradually.
        `;

    }
    else if (goal === "Healthy Lifestyle") {

        advice = `
            1. Stay physically active regularly.<br>
            2. Eat a balanced variety of nutritious foods.<br>
            3. Drink enough water.<br>
            4. Maintain a regular sleep schedule.<br>
            5. Make healthy habits part of your daily routine.
        `;

    }
    else {

        advice = `
            1. Stay physically active regularly.<br>
            2. Eat a balanced variety of nutritious foods.<br>
            3. Drink enough water.<br>
            4. Get adequate sleep and rest.<br>
            5. Increase exercise gradually.
        `;
    }

    suggestion.innerHTML = `
        <strong>Fitness Goal:</strong> ${goal}<br>
        <strong>Age:</strong> ${age}<br>
        <strong>Weight:</strong> ${weight} kg<br>
        <strong>BMI:</strong> ${bmi.toFixed(2)}<br>
        <strong>BMI Status:</strong> ${bmiStatus}<br><br>

        <strong>Personalized Fitness Suggestions:</strong><br>
        ${advice}
        <br><br>

        For personalized health or fitness advice,
        consult a qualified healthcare professional.
    ;
 app.post("/api/suggestion", (req, res) => {

    const { goal } = req.body;

    let suggestion;

    if (goal === "Weight Loss") {
        suggestion = [
            "Stay physically active regularly.",
            "Choose a balanced variety of nutritious foods.",
            "Drink enough water.",
            "Get adequate sleep and rest.",
            "Increase activity gradually."
        ];
    }
    else if (goal === "Muscle Gain") {
        suggestion = [
            "Include regular strength-based activity.",
            "Eat a balanced variety of nutritious foods.",
            "Drink enough water.",
            "Allow enough rest and recovery.",
            "Increase activity gradually."
        ];
    }
    else if (goal === "Healthy Lifestyle") {
        suggestion = [
            "Stay physically active regularly.",
            "Eat a balanced variety of nutritious foods.",
            "Drink enough water.",
            "Maintain a regular sleep schedule.",
            "Build healthy daily habits."
        ];
    }
    else {
        suggestion = [
            "Stay physically active regularly.",
            "Eat a balanced variety of nutritious foods.",
            "Drink enough water.",
            "Get adequate sleep and rest.",
            "Increase activity gradually."
        ];
    }

    res.json({
        success: true,
        suggestion: suggestion
    });
});   
