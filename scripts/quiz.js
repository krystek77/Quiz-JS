const timepiece = document.querySelector('.timepiece');
const counter = timepiece.querySelector('.timepiece--counter');
const progressBarBackground = timepiece.querySelector('.timepiece--background-progress-bar');
const progressBarForeground = timepiece.querySelector('.timepiece--foreground-progress-bar');
const TIME = 10;
let count = 0;

// init
let width = Math.floor(progressBarBackground.getBoundingClientRect().width);
progressBarBackground.style.width = `${width}px`;
progressBarForeground.style.width = '0px';

/**
 * Changes width of progress bar per step
 * 
 */
function progress() {

    let currentWidthprogressBarForeground = progressBarForeground.getBoundingClientRect().width;
    console.log(currentWidthprogressBarForeground);

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

setInterval(progress, 1000);