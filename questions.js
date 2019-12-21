
// Array with questions and answers
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        answer: "B"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choiceA: "quotes",
        choiceB: "curly brackets",
        choiceC: "parentheses",
        choiceD: "square brackets",
        answer: "C"
    },
    {
        title: "Inside which HTML element do we put the Javascript?",
        choiceA: "scripting",
        choiceB: "script",
        choiceC: "javascript",
        choiceD: "js",
        answer: "B"
    },
    {
        title: "How does a FOR loop start?",
        choiceA: "for (i=0; i <= 5)",
        choiceB: "for i=0",
        choiceC: "for (var i=0; i < 5; i++)",
        choiceD: "for (var i < 5; i+)",
        answer: "C"
    },
    {
        title: "How do you declare a Javascript varible?",
        choiceA: "var carName",
        choiceB: "v carName",
        choiceC: "varible carName",
        choiceD: "all of the above",
        answer: "A"
    }
];

// Varibles for different elements
var timeEl = document.querySelector("#timer");
var start = document.querySelector("#start-button");
var quiz = document.querySelector("#quiz");
var title = document.querySelector("#title");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var correct = document.querySelector("#correctOrNo");
var viewScore = document.querySelector(".scores");
var interval;

var secondsLeft = 75;
var scores = 0;

var lastQuestion = questions.length - 1;
var runQuestion = 0;


function renderQuestion() {
    var ques = questions[runQuestion];

    title.innerHTML = "<p>" + ques.title + "</p>";
    choiceA.innerHTML = ques.choiceA;
    choiceB.innerHTML = ques.choiceB;
    choiceC.innerHTML = ques.choiceC;
    choiceD.innerHTML = ques.choiceD;

}

// function to start the quiz and timer
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    timeEl.textContent = secondsLeft;

    interval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft
    }, 1000);

}

function renderTimer() {
    Text.textcontent = timer
}


// function to check the answers if they are correct or wrong
function checkAnswers() {
    console.log(event.target.getAttribute("value"));
    if (event.target.getAttribute("value") === questions[runQuestion].answer) {
        answerIsCorrect();
    }
    else {
        answerIsWrong();
    }

    if (runQuestion < lastQuestion) {
        runQuestion++;
        renderQuestion();
    }
    else {
        clearInterval(timer);
    }
    if (questions === 4) {
        finalAnswer();
    }
}

// this is a function to submit the quiz when the user has completed.
function finalAnswer() {

    var userInfo = userInput.value;

    if (questions[4].answer === userInfo) {
        answerIsCorrect();
    } else {
        answerIsWrong();
    }

    submitButton.remove();
    var doneButton = document.createElement("BUTTON");
    doneButton.innerHTML = "Complete";
    document.appendChild(doneButton);

    doneButton.addEventListener("click", finalQuestion);
}

// function to set up a new question that asks for user input
function finalQuestion() {

    newQuestion.innerHTML = questions[4].title;

    var userInput = document.createElement("INPUT");
    userInput.setAttribute("type", "text");
    userInput.innerText = "Write Here";
    document.body.appendChild(userInput);

    var userInfo = userInput.value;

    var submitButton = document.createElement("BUTTON");
    submitButton.innertext = "enter";
    document.body.appendChild(submitButton);

    submitButton.addEventListener("click", userStats);

}

// function to add that enter the user initial and store the score.
function userStats() {

    userInput.remove();
    doneButton.remove();


    newQuestion.innerText = "Please enter your initial";

    var userInitial = document.createElement("INPUT");
    userInitial.setAttribute("type", "text");
    document.body.appendChild(userInitial);

    var finalScore = userInitial.value + scores

    localStorage.setItem('finalScore', JSON.stringify(retrievedInfo));
}


// Check if the answer is right or wrong. Subtract 15 secs for every wrong answer. 
function answerIsCorrect() {
    correct.innerText = "Correct!";
    scores++;
    viewScore.innerText = "Score " + scores;
}

function answerIsWrong() {
    secondsLeft = secondsLeft - 15;
    correct.innerText = "Wrong!";
}

// function to store the score
function storeScore() {
    var retrievedInfo = localStorage.getItem('totalScore');
    console.log('totalScore: ', JSON.parse(retrievedInfo));
}



// click event to start the quiz
start.addEventListener("click", startQuiz);

// click event for question choices
choiceA.addEventListener("click", checkAnswers)
choiceB.addEventListener("click", checkAnswers)
choiceC.addEventListener("click", checkAnswers)
choiceD.addEventListener("click", checkAnswers)