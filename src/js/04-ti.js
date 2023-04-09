




// // Описаний в документації
// 'use strict';
// import flatpickr from 'flatpickr';
// // Додатковий імпорт стилів
// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix';
// let timerId = null;
// const refs = {
//   getElInputDate: document.getElementById('datetime-picker'),
//   startBtn: document.querySelector('[data-start]'),
//   dataDays: document.querySelector('[data-days]'),
//   dataHours: document.querySelector('[data-hours]'),
//   dataMinutes: document.querySelector('[data-minutes]'),
//   dataSeconds: document.querySelector('[data-seconds]'),
// };
// refs.startBtn.setAttribute('disabled', true);

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const currentTime = new Date();
//     if (selectedDates[0] - currentTime > 0) {
//       refs.startBtn.removeAttribute('disabled');
//     } else {
//       refs.startBtn.disabled = true;
//       Notify.failure('Please choose a date in the future');
//     }
//   },
// };
// const fp = flatpickr('#datetime-picker', options);

// refs.startBtn.addEventListener('click', onClickStartBtn);

// function onClickStartBtn() {
//   start();
// }
// function start() {
//   timerId = setInterval(() => {
//     const selectDate = fp.selectedDates[0].getTime();
//     const dataNew = new Date().getTime();
//     const ms = selectDate - dataNew;
//     if (ms < 0) {
//       clearInterval(timerId);
//       return;
//     }
    
//    updateTimer(convertMs(ms));
//   }, 1000);
// }
// function updateTimer({ days, hours, minutes, seconds }) {
//   refs.dataDays.textContent = `${days}`;
//   refs.dataHours.textContent = `${hours}`;
//   refs.dataMinutes.textContent = `${minutes}`;
//   refs.dataSeconds.textContent = `${seconds}`;
// }
// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = pad(Math.floor(ms / day));
//   // Remaining hours
//   const hours = pad(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = pad(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }



// import flatpickr from 'flatpickr';

// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Notify.init({
//   position: 'center-top',
//   cssAnimationStyle: 'zoom',
//   fontSize: '18px',
//   width: '350px',
// });

// const refs = {
//   inputDate: document.querySelector('#datetime-picker'),
//   btnStart: document.querySelector('[data-start]'),
//   body: document.querySelector('body'),
// };

// refs.btnStart.disabled = true;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {},
//   onClose: function (selectedDates, dateStr, instance) {
//     if (selectedDates[0] <= new Date()) {
//       Notify.failure('Please choose a date in the future');
//       refs.btnStart.disabled = true;
//     } else {
//       refs.btnStart.disabled = false;
//     }
//   },
// };

// const fp = flatpickr('#datetime-picker', options);

// refs.btnStart.addEventListener('click', onBtnStartClick);

// function onBtnStartClick() {
//   const futureDate = fp.selectedDates[0].getTime();
//   refs.inputDate.disabled = true;
//   refs.btnStart.disabled = true;

//   const intervalId = setInterval(() => {
//     const currentDate = Date.now();
//     const ms = futureDate - currentDate;
//     if (ms < 0) {
//       refs.inputDate.disabled = false;
//       refs.btnStart.disabled = false;
//       clearInterval(intervalId);
//       refs.body.insertAdjacentHTML(
//         'beforeend',
//         '<iframe src="https://gifer.com/embed/2DV" width=480 height=216.960 frameBorder="0" allowFullScreen></iframe>'
//       );
//       return;
//     }
//     updateTimer(convertMs(ms));
//   }, 1000);
// }

// function pad(value) {
//   return String(value).padStart('2', 0);
// }

// const timer = {
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };

// function updateTimer({ days, hours, minutes, seconds }) {
//   timer.days.textContent = `${days}`;
//   timer.hours.textContent = `${hours}`;
//   timer.minutes.textContent = `${minutes}`;
//   timer.seconds.textContent = `${seconds}`;
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = pad(Math.floor(ms / day));
//   // Remaining hours
//   const hours = pad(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = pad(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }