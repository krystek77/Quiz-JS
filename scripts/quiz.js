const timepiece = document.querySelector('.timepiece');
const counter = timepiece.querySelector('.timepiece--counter');
const progressBarBackground = timepiece.querySelector('.timepiece--background-progress-bar');
const progressBarForeground = timepiece.querySelector('.timepiece--foreground-progress-bar');
const startBtn = document.querySelector('.start-container--button');
const questionContainer = document.querySelector('.question-container');
const startContainer = document.querySelector('.start-container');

const TIME = 10;
let count = 0;
let width;
let time;

let questions = [{
        question: "What does HTML stands for",
        answerA: "correct",
        answerB: "wrong",
        answerC: "wrong",
        correct: "A",
        img: "html"
    },
    {
        question: "What does JS stands for",
        answerA: "wrong",
        answerB: "correct",
        answerC: "wrong",
        correct: "B",
        img: "js"
    },
    {
        question: "What does CSS stands for",
        answerA: "wrong",
        answerB: "wrong",
        answerC: "correct",
        correct: "C",
        img: "css"
    }
];

const questionHTML = document.querySelector('.question-container--question');
const answersListHTML = document.querySelector('.question-container--answers-list');
const imageHTML = document.querySelector('.question-container--image');

let currentQuestionIndex = 0;
const lastQuestionIndex = questions.length - 1;
const numbersOfquestions = questions.length;
let question = null;

/**
 * Render question
 * 
 */
function renderQuestion() {
    const position = "beforeend";
    if (currentQuestionIndex < numbersOfquestions) {

        question = questions[currentQuestionIndex];
        questionHTML.innerHTML = question.question;
        imageHTML.innerHTML = "<img src='./images/" + question.img + ".png' alt='" + question.img + " logo'>";
        answersListHTML.insertAdjacentHTML(position, `<li class="question-container--answer" id='A'>${question.answerA}</li>`);
        answersListHTML.insertAdjacentHTML(position, `<li class="question-container--answer" id='B'>${question.answerB}</li>`);
        answersListHTML.insertAdjacentHTML(position, `<li class="question-container--answer" id='C'>${question.answerC}</li>`);
    }
}

const statusContainer = document.querySelector('.question-container--status');
/**
 * Render status
 * 
 */
function renderStatus() {
    for (let index = 0; index < numbersOfquestions; index++) {
        statusContainer.innerHTML += "<span class='question-container--progress' id=" + index + "></span>";
    }
}
/**
 * Checks if answer is correct or wrong and set green background-color for suitable status element
 */
function answerIsCorrect() {
    document.getElementById(currentQuestionIndex).style.backgroundColor = "green";
}
/**
 * Checks if answer is wrong or wrong and set red background-color for suitable status element
 */
function answerIsWrong() {
    document.getElementById(currentQuestionIndex).style.backgroundColor = "red";
}

/**
 * Changes width of progress bar per step
 * 
 */
function progress() {
    console.log("PROGRESS.... ");
    let currentWidthprogressBarForeground = progressBarForeground.getBoundingClientRect().width;

    if (currentWidthprogressBarForeground < width) {
        count++;
        counter.innerHTML = count;
        let step = count * width / TIME;
        progressBarForeground.style.width = `${step}px`;
    } else {
        count = 0;
        counter.innerHTML = count;
        progressBarForeground.style.width = `0px`;
    }
}

function init() {
    console.log("INIT .... ")
    width = Math.floor(progressBarBackground.getBoundingClientRect().width);
    console.log(width);
    progressBarBackground.style.width = `${width}px`;
    progressBarForeground.style.width = '0px';
    renderQuestion();
    renderStatus();
    time = setInterval(progress, 1000);
}

answersListHTML.addEventListener('click', function () {
    console.log("CHOOSEN ANSWER is ...");
    if (event.target === this) return;

    const answer = event.target.id;
    console.log(answer);

    if (answer === question.correct) {
        console.log("CORRECT");
        answerIsCorrect();
    } else {
        console.log("WRONG");
        answerIsWrong();
    }
    
})

startBtn.addEventListener('click', function () {
    console.log("Start QUIZ .... ");
    startContainer.classList.add('hide');
    questionContainer.classList.add('show');
    init();
});