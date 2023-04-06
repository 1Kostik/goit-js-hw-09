// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix';
let timerId = null;
const refs = {
  getElInputDate: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};
refs.startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentTime = new Date();
    if (selectedDates[0] - currentTime > 0) {
      refs.startBtn.removeAttribute('disabled');
    } else {
      refs.startBtn.disabled = true;
      Report.info('Please choose a date in the future');
    }
  },
};
const fp = flatpickr('#datetime-picker', options);

refs.startBtn.addEventListener('click', onClickStartBtn);

function onClickStartBtn() {
  start();
}
function start() {
  timerId = setInterval(() => {
    const selectDate = fp.selectedDates[0].getTime();
    const dataNew = new Date().getTime();
    const ms = selectDate - dataNew;
    if (ms < 0) {
      clearInterval(timerId);
      return;
    }
    
   updateTimer(convertMs(ms));
  }, 1000);
}
function updateTimer({ days, hours, minutes, seconds }) {
  refs.dataDays.textContent = `${days}`;
  refs.dataHours.textContent = `${hours}`;
  refs.dataMinutes.textContent = `${minutes}`;
  refs.dataSeconds.textContent = `${seconds}`;
}
function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
