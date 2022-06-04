import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector(`.form`),
  delay: document.querySelector(`input[name = "delay"]`),
  delayStep: document.querySelector(`input[name = "step"]`),
  amount: document.querySelector(`input[name = "amount"]`),
}

refs.form.addEventListener('submit', onCreatePromises);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } 
        reject({position, delay});      
    }, delay);  
  });
}
  
function onCreatePromises(event) {
  event.preventDefault();

  for(let i = 1; i <= refs.amount.value; i += 1){
    
   let position = i;
   let delay = Number(refs.delay.value) + Number(refs.delayStep.value) * (i - 1);
    
   createPromise(position, delay)
  .then(({position, delay}) =>  Notify.success(`Fulfilled promise ${position} in ${delay}ms`))
  .catch(({position, delay}) =>  Notify.failure(`Rejected promise ${position} in ${delay}ms`));
  }  
  event.currentTarget.reset();
}