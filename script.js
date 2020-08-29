//generatre start button && addEventList(click)
//Click initialzes Timer function >setInterval(func, 1000ms/secs)
//function that with toggle the display of modal with selet/click action on the modal
//conditionals for the answers (if opt C is selected, score ++)
//conditonal else that subtracts from Totalseconds
//maybe modals are in an array with data indices; if the array reaches the end, totalSeconds ===0
//locally store scores & name/user ID after time reaches 0, in an ordered list that's appeneded, maybe as an obj. 
//Clear or reset button?

let minutesLeft = document.getElementById("minutes");
let secondsLeft = document.getElementById("seconds");
let totalSeconds = 10 * 60;

let score = document.getElementById("score");
let userName = document.getElementById("userName");



function newQuestion() {
    
}


function startQuiz() {
    document.getElementById("starter").style.display="none";
    document.getElementById("quizDiv").style.display="block";
    newQuestion()
    startTimer()
    }

function startTimer(){

    if (totalSeconds > 0) {
        interval = setInterval(function () {
            for (var i = 0; i < totalSeconds; i--) {
                totalSeconds--;
                minutesLeft.textContent = Math.floor(totalSeconds / 60);
                secondsLeft.textContent = totalSeconds % 60
            }
            return totalSeconds;
        }, 1000)
    }
}

function scoreKeeper() {
    let scoreTotal = 0
    if (correctAnswer === true) {
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