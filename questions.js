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

var timer = document.querySelector("#timer");
var start = document.querySelector("#start-button");
var quiz = document.querySelector("#quiz");
var title = document.querySelector("#title");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");

var timer = 75;
var score = 0;

var lastQuestion = questions.length - 1;
var runQuestion = 0;
var count = 0;



function renderQuestion() {
    var ques = questions[runQuestion];

    title.innerHTML = "<p>" + ques.title + "</p>";
    choiceA.innerHTML = ques.choiceA;
    choiceB.innerHTML = ques.choiceB;
    choiceC.innerHTML = ques.choiceC;
    choiceD.innerHTML = ques.choiceD;

}

start.addEventListener("click", startQuiz);
choiceA.addEventListener("click", choiceA);

function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";

    timer = setInterval(75000);
}

function rendertimer() {
    timer.textContent = timer
}

function checkAnswers(answers) {
    if (answer === questions[runQuestion].correct) {
        score++;
        answerIsCorrect();
    }
    else {
        answerIsWrong();
    }

    count = 0;
    if (runQuestion < lastQuestion) {
        runQuestion++;
        renderQuestion();
    }
    else {
        clearInterval(timer);
    }
}

function answerIsCorrect() {
    document.getElementById(runQuestion);
}

function answerIsWrong() {
    document.getElementById(runQuestion);
}