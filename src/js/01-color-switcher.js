const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;
let timerId = null;
stopBtn.setAttribute('disabled', true);
startBtn.addEventListener('click', onclickStartBtn);
function onclickStartBtn() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');
  }, 1000);
}
stopBtn.addEventListener('click', onclickStopBtn);
function onclickStopBtn() {
  clearInterval(timerId);

  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
