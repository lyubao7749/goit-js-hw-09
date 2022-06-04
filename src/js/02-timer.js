import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    input: document.querySelector(`#datetime-picker`),
    btnStart: document.querySelector(`button[data-start]`),
    days: document.querySelector(`span[data-days]`),
    hours: document.querySelector(`span[data-hours]`),
    minutes: document.querySelector(`span[data-minutes]`),
    seconds: document.querySelector(`span[data-seconds]`),
    
};

refs.btnStart.setAttribute("disabled", true);
refs.btnStart.addEventListener(`click`, onTimerStart);
let selectDateTime;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const now = new Date().getTime();
      selectDateTime = selectedDates[0].getTime(); 
      const distance = selectDateTime - now;
         if ( distance >= 0 ) {
            refs.btnStart.removeAttribute("disabled"); 
            return;
        }
        Notify.failure('Please choose a date in the future'); 
    },
  };

  flatpickr("#datetime-picker", options);

  function onTimerStart() {
     const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = selectDateTime - now;
        const timeLeft = convertMs(distance);

        if(distance < 0) {
            clearInterval(timerInterval);
            return;
        }        
        refs.days.textContent = addLeadingZero(timeLeft.days);
        refs.hours.textContent = addLeadingZero(timeLeft.hours);
        refs.minutes.textContent = addLeadingZero(timeLeft.minutes);
        refs.seconds.textContent = addLeadingZero(timeLeft.seconds);           

    }, 1000);
    
  }

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

