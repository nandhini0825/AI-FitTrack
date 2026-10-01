function calculateBMI() {

    const weight = Number(document.getElementById("weight").value);
    const height = Number(document.getElementById("height").value);

    if (!weight || !height) {
        alert("Please enter weight and height.");
        return;
    }

    if (weight <= 0 || height <= 0) {
        alert("Please enter valid positive values.");
        return;
    }

    const heightInMeter = height / 100;

    const bmiValue =
        weight / (heightInMeter * heightInMeter);

    const bmi = bmiValue.toFixed(2);

    document.getElementById("bmi").innerText = bmi;

    let status = "";

    if (bmiValue < 18.5) {
        status = "Below reference range";
    }
    else if (bmiValue < 25) {
        status = "Within reference range";
    }
    else if (bmiValue < 30) {
        status = "Above reference range";
    }
    else {
        status = "High reference range";
    }

    document.getElementById("status").innerText = status;
}
async function getSuggestion() {

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

    suggestion.innerText = "Getting AI suggestion...";

    try {

        const response = await fetch(
            "http://localhost:5000/api/suggestion",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    goal: goal
                })
            }
        );

        const result = await response.json();

        if (!result.success) {
            suggestion.innerText =
                "Unable to get suggestion.";
            return;
        }

        const heightInMeter = height / 100;
        const bmi = weight / (heightInMeter * heightInMeter);

        suggestion.innerHTML = `
            <strong>Fitness Goal:</strong> ${goal}<br>
            <strong>Age:</strong> ${age}<br>
            <strong>Weight:</strong> ${weight} kg<br>
            <strong>BMI:</strong> ${bmi.toFixed(2)}<br><br>

            <strong>AI Fitness Suggestions:</strong><br>
            1. ${result.suggestion[0]}<br>
            2. ${result.suggestion[1]}<br>
            3. ${result.suggestion[2]}<br>
            4. ${result.suggestion[3]}<br>
            5. ${result.suggestion[4]}<br><br>

            For personalized health or fitness advice,
            consult a qualified healthcare professional.
        `;

    } catch (error) {

        suggestion.innerText =
            "Unable to connect to the backend server.";
    }
} {

    