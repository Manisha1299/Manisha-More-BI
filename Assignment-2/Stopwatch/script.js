var h1 = document.getElementsByTagName('h2')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    millseconds = 0, seconds = 0, minutes = 0;


function add() {
    millseconds++;
    if (millseconds >= 99) {
        millseconds = 0;
        seconds++;
    }

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seconds > 9 ? seconds : "0" + seconds) + ":" + (millseconds > 9 ? millseconds : "0" + millseconds);

    timer();
}
function timer() {
    t = setTimeout(add, 10);
}
timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function () {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function () {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; millseconds = 0;
}