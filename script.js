
// generatre start button && addEventList(click)

// Click initialzes Timer function >setInterval(func, 1000ms/secs)

// function that with toggle the display of modal with selet/click action on the modal

// conditionals for the answers (if opt C is selected, score ++)

// conditonal else that subtracts from Totalseconds

// maybe modals are in an array with data indices; if the array reaches the end, totalSeconds ===0

// locally store scores & name/user ID after time reaches 0, in an ordered list that's appeneded, maybe as an obj. 

// Clear or reset button?

let minutesLeft = document.getElementById("minutes");
let secondsLeft = document.getElementById("seconds");
let totalSeconds = 10 * 60;


let q1 = document.getElementById("Q1");

let q2 = document.getElementById("Q2");

let q3 = document.getElementById("Q3");

let q4 = document.getElementById("Q4");

let q5 = document.getElementById("Q5");

let q6 = document.getElementById("Q6");

let questionList = [q1, q2, q3, q4, q5, q6]

let score = document.getElementById("score");

let userName = document.getElementById("userName");



function newQuestion() {

    for (var i = 1; i < questionList.length; i++) {
        questionList[0].style.display="none"
        questionList[i].style.display = "block"
        scoreKeeper()
    }



}



function startQuiz() {

    document.getElementById("starter").style.display = "none";

    document.getElementById("quizDiv").style.display = "block";

    questionList[0].style.display = "block"

    startTimer()

}

function startTimer() {

    if (totalSeconds > 0) {
        interval = setInterval(function () {
            totalSeconds--;
            minutesLeft.textContent = Math.floor(totalSeconds / 60);
            seconds = totalSeconds % 60
            if (seconds < 10) {
                secondsLeft.textContent = "0" + seconds
            }
            else {
                secondsLeft.textContent = seconds
            }

        }, 1000)
    }
}


function scoreKeeper() {

    let scoreTotal = 0

    if (document. getElementById('correct'). clicked == true) {

        scoreTotal++

        return scoreTotal

    }

    else {

        ReduceTime()

        if (scoreTotal > 0) {

            scoreTotal--

            return scoreTotal

        }

    }


    score.textContent = scoreTotal

}


function ReduceTime() {


    totalSeconds = totalSeconds - 30;

    return totalSeconds;

}


function pauseQuiz() {

    doessomething.something

}


document.getElementById("Start").addEventListener("click", startQuiz)

document.getElementById("Next").addEventListener("click", newQuestion)

document.getElementById("Pause").addEventListener("click", pauseQuiz)