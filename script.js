let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
  if (!isRunning) {
    timer = setInterval(updateStopwatch, 1000);
    document.getElementById("startStopBtn").textContent = "Stop";
    isRunning = true;
  } else {
    clearInterval(timer);
    document.getElementById("startStopBtn").textContent = "Start";
    isRunning = false;
  }
}

function resetStopwatch() {
  clearInterval(timer);
  document.getElementById("display").textContent = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
  isRunning = false;
  document.getElementById("startStopBtn").textContent = "Start";
}

function updateStopwatch() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  const display = document.getElementById("display");
  display.textContent = 
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds);
}

document.getElementById("startStopBtn").addEventListener("click", startStopwatch);
document.getElementById("resetBtn").addEventListener("click", resetStopwatch);
