'use strict';
import { Notify } from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onFromSubmitCreatePromises);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
function onFromSubmitCreatePromises(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  let dataParams = {};
  for (const [key, value] of formData.entries()) {
    dataParams[key] = Number(value);
  }
  let { amount, step, delay } = dataParams;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay).then(onSuccess).catch(onError);
    delay += step;
  }
 form.reset();
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
