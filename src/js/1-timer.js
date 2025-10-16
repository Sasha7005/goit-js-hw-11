import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateInput = document.querySelector('#datetime-picker');
const timerStartBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let userSelectedDate = null;

timerStartBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= Date.now()) {
      timerStartBtn.setAttribute('disabled', '');
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      return;
    }
    timerStartBtn.removeAttribute('disabled');
    userSelectedDate = selectedDates[0];
  },
};

const flatp = flatpickr(dateInput, options);
timerStartBtn.addEventListener('click', startTimer);

function startTimer() {
  timerStartBtn.setAttribute('disabled', '');

  const intervalId = setInterval(() => {
    const miliseconds = userSelectedDate - Date.now();
    if (miliseconds > 0) {
      dateInput.setAttribute('disabled', '');

      const time = convertMs(miliseconds);
      dataDays.textContent = addLeadingZero(time.days);
      dataHours.textContent = addLeadingZero(time.hours);
      dataMinutes.textContent = addLeadingZero(time.minutes);
      dataSeconds.textContent = addLeadingZero(time.seconds);
    } else {
      dateInput.removeAttribute('disabled');
      clearInterval(intervalId);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000));
console.log(convertMs(140000));
console.log(convertMs(24140000));

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
