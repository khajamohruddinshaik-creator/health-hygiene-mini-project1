
// Health and Hygiene Mini Project

// Welcome Message
window.addEventListener("load", function () {
    console.log("Welcome to Health and Hygiene Website!");
});

// Daily Hygiene Tips
const hygieneTips = [
    "Wash your hands with soap regularly.",
    "Drink clean and safe drinking water.",
    "Brush your teeth twice every day.",
    "Take a bath daily and wear clean clothes.",
    "Keep your surroundings clean.",
    "Eat healthy food and fresh fruits.",
    "Maintain proper toilet hygiene."
];

function showRandomTip() {
    const randomIndex = Math.floor(
        Math.random() * hygieneTips.length
    );

    alert("Health Tip: " + hygieneTips[randomIndex]);
}

// Health Awareness Quiz
function startQuiz() {

    let score = 0;

    let answer1 = prompt(
        "1. How many times should we brush our teeth daily?\nA. Once\nB. Twice\nC. Never"
    );

    if (answer1 && answer1.toUpperCase() === "B") {
        score++;
    }

    let answer2 = prompt(
        "2. Which is best for washing hands?\nA. Soap and water\nB. Only water\nC. Nothing"
    );

    if (answer2 && answer2.toUpperCase() === "A") {
        score++;
    }

    let answer3 = prompt(
        "3. What should we drink daily?\nA. Dirty water\nB. Clean water\nC. Muddy water"
    );

    if (answer3 && answer3.toUpperCase() === "B") {
        score++;
    }

    alert(
        "Your Quiz Score: " + score + "/3\n" +
        (score === 3
            ? "Excellent! You know good hygiene habits."
            : "Good try! Keep learning about hygiene.")
    );
}

// Back to Top Button
function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Current Year
const year = new Date().getFullYear();
console.log("Project Year: " + year);

// Daily Hygiene Checklist

const checkboxes = document.querySelectorAll(
    ".hygiene-check"
);

function updateProgress() {

    let completed = 0;

    checkboxes.forEach(function(box) {
        if (box.checked) {
            completed++;
        }
    });

    let total = checkboxes.length;

    let percentage = Math.round(
        (completed / total) * 100
    );

    document.getElementById("progress").innerText =
        "Completed: " + completed + " / " + total;

    document.getElementById("percentage").innerText =
        "Progress: " + percentage + "%";
}

checkboxes.forEach(function(box) {
    box.addEventListener("change", updateProgress);
});

function resetChecklist() {

    checkboxes.forEach(function(box) {
        box.checked = false;
    });

    updateProgress();
}

function submitChecklist() {

    let completed = 0;

    checkboxes.forEach(function(box) {
        if (box.checked) {
            completed++;
        }
    });

    let total = checkboxes.length;

    if (completed === total) {
        document.getElementById("result").innerText =
            "Congratulations! All hygiene tasks completed!";
    } else {
        document.getElementById("result").innerText =
            "You completed " + completed + " out of " + total +
            " tasks. Please complete the remaining tasks.";
    }
}

// DAILY HYGIENE CHECKLIST

const hygieneForm = document.getElementById("hygieneForm");
const checklistResult = document.getElementById("checklistResult");

hygieneForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const checkedTasks = hygieneForm.querySelectorAll(
        'input[name="task"]:checked'
    );

    const totalTasks = hygieneForm.querySelectorAll(
        'input[name="task"]'
    ).length;

    const completed = checkedTasks.length;

    checklistResult.style.display = "block";

    if (completed === 0) {
        checklistResult.innerHTML =
            "Please complete at least one activity!";
        return;
    }

    let percentage = Math.round((completed / totalTasks) * 100);

    checklistResult.innerHTML =
        "Great Job! 🎉<br>" +
        "Completed Activities: " + completed + " / " + totalTasks +
        "<br>Progress: " + percentage + "%";

});


// HEALTH AND HYGIENE QUIZ

const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");

const correctAnswers = {
    q1: "b",
    q2: "a",
    q3: "c",
    q4: "b",
    q5: "a"
};

quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    for (let question in correctAnswers) {

        const selectedAnswer = quizForm.querySelector(
            'input[name="' + question + '"]:checked'
        );

        if (!selectedAnswer) {
            alert("Please answer all 5 questions!");
            quizResult.style.display = "none";
            return;
        }

        if (selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    let percentage = (score / totalQuestions) * 100;

    quizResult.style.display = "block";

    quizResult.innerHTML =
        "<h3>Quiz Completed! 🎉</h3>" +
        "<p>Your Score: " + score + " / " + totalQuestions + "</p>" +
        "<p>Your Percentage: " + percentage + "%</p>" +
        "<p>" +
        (score >= 4 ? "Excellent! Keep it up! 🌟" :
         score >= 3 ? "Good job! Keep learning! 👍" :
         "Keep practicing! You can do better! 💪") +
        "</p>";
});
