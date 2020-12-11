var timer = 60;
var timerSpan = document.querySelector("#timer");

// Hide the start page and show the quiz page when the start button is clicked, then start the quiz
document.querySelector("#start").addEventListener("click", function () {
    document.querySelector("#start-page").style.display = "none";
    document.querySelector("#quiz-page").style.display = "block";

    // start the timer
    var timerInterval = setInterval(function () {
        // decrement the timer and update the html timer
        timerSpan.textContent = --timer;
        if (timer <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);

    // TODO start the quiz
})