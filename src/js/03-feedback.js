var throttle = require('lodash.throttle');

let emailInput = document.querySelector('input[name="email"]');
let messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');
const btn = form.lastElementChild;

// function inputUpdate() {
//   const formInput = {
//     email: emailInput.value,
//     message: messageInput.value,
//   };
//   localStorage.setItem('feedback-form-state', JSON.stringify(formInput));
//   console.log(formInput);
// }

const throttleInputUpdate = throttle(function () {
  const formInput = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formInput));
  console.log(formInput);
}, 500);

emailInput.addEventListener('input', throttleInputUpdate);
messageInput.addEventListener('input', throttleInputUpdate);

console.log(localStorage.getItem('feedback-form-state'));

window.addEventListener('load', function () {
  const storedInput = localStorage.getItem('feedback-form-state');
  if (storedInput) {
    const formInput = JSON.parse(storedInput);
    emailInput.value = formInput.email;
    messageInput.value = formInput.message;
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  formLog();
});

function formLog() {
  console.log(emailInput.value);
  console.log(messageInput.value);
  form.reset();
  localStorage.clear();
}
