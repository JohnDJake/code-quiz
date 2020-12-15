const timerSpan = document.querySelector("#timer");
const startPageEl = document.querySelector("#start-page");
const quizPageEl = document.querySelector("#quiz-page");
const scorePageEl = document.querySelector("#score-page");
const scoreInputEl = document.querySelector("#score");
const questionEl = document.querySelector("#question");
const answer0El = document.querySelector("#answer0");
const answer1El = document.querySelector("#answer1");
const answer2El = document.querySelector("#answer2");
const answer3El = document.querySelector("#answer3");


var questions = [{
    question: "Which is not a primitive data type in JavaScript?",
    answers: ["string", "number", "boolean", "object"],
    correctAnswer: "object"
}, {
    question: "What do you call a function that you pass to an event handler?",
    answers: ["callback function", "callforward function", "textforward function", "emailback function"],
    correctAnswer: "callback function"
}, {
    question: "How many statements are in a for loop?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "3"
}, {
    question: "Which of the following is not a reserved keyword?",
    answers: ["with", "set", "debugger", "catch"],
    correctAnswer: "set"
}]

var timer = 60;
var questionIndex = -1;
var timerInterval;

// Switch to the next question
function nextQuestion() {
    if (++questionIndex == questions.length) {
        endGame();
        return;
    }
    questionEl.textContent = questions[questionIndex].question;
    answer0El.textContent = questions[questionIndex].answers[0];
    answer1El.textContent = questions[questionIndex].answers[1];
    answer2El.textContent = questions[questionIndex].answers[2];
    answer3El.textContent = questions[questionIndex].answers[3];
}

// Randomly shuffle an array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// End the quiz
function endGame() {
    clearInterval(timerInterval);
    quizPageEl.style.display = "none";
    scoreInputEl.value = timer;
    scorePageEl.style.display = "block";
}

// Shuffle the questions and the answers
shuffleArray(questions);
for (var i = 0; i < questions.length; i++) {
    shuffleArray(questions[i].answers);
}

// Hide the start page and show the quiz page when the start button is clicked, then start the quiz
document.querySelector("#start").addEventListener("click", function () {
    startPageEl.style.display = "none";
    quizPageEl.style.display = "block";

    // start the timer
    timerInterval = setInterval(function () {
        // decrement the timer and update the html timer
        timerSpan.textContent = --timer;
        if (timer <= 0) {
            endGame();
        }
    }, 1000);

    // start the quiz
    nextQuestion();
    document.querySelectorAll(".answer").forEach(function (el) {
        el.addEventListener("click", function (event) {
            event.target.blur();
            if (event.target.textContent != questions[questionIndex].correctAnswer) {
                timer -= 10;
            }
            nextQuestion();
        })
    })
})