const currentDate = Date.now(),
  targetDate = new Date("18 June 2025 16:00:00"),
  notGrad = document.querySelector(".not-graduated"),
  grad = document.querySelector(".graduated"),
  audio = document.querySelector("audio");

if (currentDate >= targetDate.getTime()) {
  grad.classList.add("active");
} else {
  startTimer();
  notGrad.classList.add("active");
}

function getCountDown(targetDate, currentDate) {
  const dateDiff = targetDate.getTime() - currentDate;
  const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  showCountDown(days, hours, minutes, seconds);
}

function showCountDown(days, hours, minutes, seconds) {
  const daysEl = document.querySelector(".days .value"),
    hoursEl = document.querySelector(".hours .value"),
    minutesEl = document.querySelector(".minutes .value"),
    secondsEl = document.querySelector(".seconds .value");
  daysEl.textContent = days < 10 ? `0${days}` : days;
  hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
  minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

function startTimer() {
  const timerInterval = setInterval(() => {
    const currentDate = Date.now();
    if (currentDate < targetDate.getTime()) {
      getCountDown(targetDate, currentDate);
    } else {
      clearInterval(timerInterval);
      notGrad.classList.remove("active");
      grad.classList.add("active");
    }
  }, 1000);
}
