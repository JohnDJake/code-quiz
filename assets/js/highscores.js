const scoresListEl = document.querySelector("#scores-list");
var savedScores;

function getScores() {
    savedScores = JSON.parse(localStorage.getItem("codeQuizScores")) || [];
    scoresListEl.innerHTML = "";
    for (var i = 0; i < savedScores.length; i++) {
        var newLi = document.createElement("li");
        newLi.textContent = `${savedScores[i].initials} - ${savedScores[i].score}`;
        scoresListEl.appendChild(newLi);
    }
}

document.querySelector("#clear-highscores").addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("codeQuizScores", "[]");
    getScores();
})

getScores();