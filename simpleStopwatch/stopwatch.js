let timerId = null;
let time = 0;
let record_cnt = 0;

const stopwatch = document.getElementById("watch");
const record = document.getElementById("record");

function printTimer() {
    time++;
    stopwatch.innerText = getStrTime(time);
}

function getStrTime(time) {
    return String((time-time%6000)/6000).padStart(2, "0") + ":" +
    String(((time-time%100)/100)%60).padStart(2, "0") + "." +
    String(time%100).padStart(2, "0");
}

function stopTimer() {
    clearInterval(timerId);
    timerId = null;
}

function resetTimer() {
    stopTimer();
    stopwatch.innerText = "00:00.00";
    time = 0;
    record_cnt = 0;
    record.innerText = "";
}

function startTimer() {
    console.log(timerId);
    if(timerId) { return; }
    timerId = setInterval(printTimer, 10);
}

function writeRecord() {
    if (record_cnt == 9 || time == 0) { return; }
    record_cnt++;
    record.innerText += `${record_cnt} : ${getStrTime(time)}\n`;
}

stopwatch.innerText = "00:00.00";