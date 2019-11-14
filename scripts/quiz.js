const timepiece = document.querySelector('.timepiece');
const counter = timepiece.querySelector('.timepiece--counter');
const progressBarBackground = timepiece.querySelector('.timepiece--background-progress-bar');
const progressBarForeground = timepiece.querySelector('.timepiece--foreground-progress-bar');
const startBtn = document.querySelector('.start-container--button');
const questionContainer = document.querySelector('.question-container');
const startContainer = document.querySelector('.start-container');

const question = document.querySelector('.question-container--question');
const answersList = document.querySelector('.question-container--answers-list');
const image = document.querySelector('.question-container--image img');

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
    progressBarBackground.style.width = `${width}px`;
    progressBarForeground.style.width = '0px';
    time = setInterval(progress, 1000);
    console.log(question);
    console.log(answersList);
    console.log(image);
}


startBtn.addEventListener('click', function () {
    console.log("Start QUIZ .... ");
    startContainer.classList.add('hide');
    questionContainer.classList.add('show');
    init();
});