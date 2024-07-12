
// Function Declaration
function checkAnswer() {
    // Correct Answer
    let correctAnswer = '4';

    // Retrieve the User’s Answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Compare the User’s Answer with the Correct Answer
    let feedback = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Adding Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
