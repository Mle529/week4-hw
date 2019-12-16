
// Array with questions and answers
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choiceA: "quotes",
        choiceB: "curly brackets",
        choiceC: "parentheses",
        choiceD: "square brackets",
        answer: "parentheses"
    },
    {
        title: "Inside which HTML element do we put the Javascript?",
        choiceA: "scripting",
        choiceB: "script",
        choiceC: "javascript",
        choiceD: "js",
        answer: "script"
    },
    {
        title: "How does a FOR loop start?",
        choiceA: "for (i=0; i <= 5)",
        choiceB: "for i=0",
        choiceC: "for (i=0; i < 5; i++)",
        choiceD: "for (i < 5; i+)",
        answer: "for (i=0; i < 5; i++)"
    },
    {
        title: "How do you declare a Javascript varible?",
        choiceA: "var carName",
        choiceB: "v carName",
        choiceC: "varible carName",
        choiceD: "all of the above",
        answer: "var carName"
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
var viewScore = document.querySelector("#scores");

var secondsLeft = 75;
var scores = 0;

var lastQuestion = questions.length - 1;
var runQuestion = 0;


// This is to render the questions and choices
function renderQuestion() {
    var ques = questions[runQuestion];

    title.innerHTML = "<p>" + ques.title + "</p>";
    choiceA.innerHTML = ques.choiceA;
    choiceB.innerHTML = ques.choiceB;
    choiceC.innerHTML = ques.choiceC;
    choiceD.innerHTML = ques.choiceD;

}

// click event to start the quiz
start.addEventListener("click", startQuiz);

// function to start the quiz and timer
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";

    timer = setInterval(75000);

}

function renderTimer() {
    Text.textcontent = timer
}

// function to check the answers if they are correct or wrong
function checkAnswers(answers) {
    if (answer === questions[runQuestion].correct) {
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
}



function answerIsCorrect() {
    correct.innerText = "correct!";
    scores++;
    viewScore.innerText = "Score " + scores;
}

function answerIsWrong() {
    correct.innerText = "wrong!";
}

// function to store the score
function storeScore() {
    var retrievedInfo = localStorage.getItem('totalScore');
    console.log('totalScore: ', JSON.parse(retrievedInfo));
}