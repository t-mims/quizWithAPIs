
//Sets up inital timer
let minutesLeft = document.getElementById("minutes");
let secondsLeft = document.getElementById("seconds");
let totalSeconds = 5 * 60;

//Catching all quiz questions and storing in an array
let q1 = document.getElementById("Q1");

let q2 = document.getElementById("Q2");

let q3 = document.getElementById("Q3");

let q4 = document.getElementById("Q4");

let q5 = document.getElementById("Q5");

let q6 = document.getElementById("Q6");

let questionList = [q1, q2, q3, q4, q5, q6]


//setting up score & scoreboard 
let score = document.getElementById("scorekeeper");
let answerType = document.getElementsByTagName("a")
let userName = document.getElementById("userName");

//starts the quiz timer
function startTimer() {

    if (totalSeconds > 0) {
        interval = setInterval(function () {
            totalSeconds--;
            minutesLeft.textContent = Math.floor(totalSeconds / 60) + " :";
            seconds = totalSeconds % 60
            if (seconds < 10) {
                secondsLeft.textContent = "0" + seconds
            }
            else {
                secondsLeft.textContent = seconds
            }


        }, 1000)
        if (totalSeconds === 0) {
            minutesLeft.textContent = "00"
            secondsLeft.textContent = "00"
            endQuiz()
        }

    }

}
//hides the initial jumbotron, begins with first question, and calls startTimer
function startQuiz() {

    document.getElementById("starter").style.display = "none";

    document.getElementById("quizDiv").style.display = "block";

    questionList[0].style.display = "block"

    startTimer()

}
//will toggle display of each question and call scoreKeeper to evalulate if correct or incorrect
function newQuestion() {

    for (var i = 1; i < questionList.length; i++) {
        questionList[0].style.display = "none"
        questionList[i].style.display = "block"
        scoreKeeper()

    }
}


//modifies total score based on correct or incorrect response
function scoreKeeper() {

    let scoreTotal = 6 / 6
    if (answerType.classList.contains("correct") == true) {

        return scoreTotal
    }
    else {
        ReduceTime()
        if (scoreTotal > 0) {
            scoreTotal = Math.floor((scoreTotal - 1) / 6)

            return scoreTotal
        }
        if (scoreTotal = 0) {
            endQuiz()
        }
    }
    score.textContent = scoreTotal + "%"

}

//triggered by incorrect response, will reduce overall time (totalseconds) by 30 secs
function ReduceTime() {


    totalSeconds = totalSeconds - 30;

    return totalSeconds;

}

function saveScore(){
    userName= prompt("Save score with initals:")
    User={
        userName,
        scoreTotal
    }
    document.getElementById("scoreboard").append(User)
}
function endQuiz() {
    questionList[5].style.display = "none";
    saveScore()

}


document.getElementById("Start").addEventListener("click", startQuiz)

document.getElementById("Next").addEventListener("click", newQuestion)

document.getElementById("Save").addEventListener("click",saveScore())