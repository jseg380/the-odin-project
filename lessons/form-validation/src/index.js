import mainContent from './body.js';
import './style.css';

const body = document.body;

body.appendChild(mainContent);


// Form validation

const emailInput = document.querySelector('#email');
const zipInput = document.querySelector('#zip');
const countrySelect = document.querySelector('#country');
const passInput = document.querySelector('#password');
const confirmPassInput = document.querySelector('#confirm-password');
const submitButton = document.querySelector('.main-content__submit');
const inputs = Array.from(document.querySelectorAll('.main-content__input'));
let validMap = new Map(inputs.map((input) => [input.id, false]));
const isFormValid = function() {
  const invalidInputs = Array.from(validMap.values()).filter((valid) => !valid);

  console.log(validMap);
  if (validMap.size > 5) console.log('\n\nIT HAPPENED NOW\n\n');
  console.log('In isFormValid, invalidInputs', invalidInputs);
  // The form is valid if there are no invalid inputs
  return invalidInputs.length === 0;
};

// Event listeners
submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (!isFormValid()) return;

  alert('The form is valid!');
});

emailInput.addEventListener('focusout', emailValidity);
emailInput.addEventListener('input', emailValidity);

countrySelect.addEventListener('focusout', countryValidity);
countrySelect.addEventListener('input', countryValidity);

zipInput.addEventListener('focusout', zipValidity);
zipInput.addEventListener('input', zipValidity);

passInput.addEventListener('focusout', passwordValidity);
passInput.addEventListener('input', passwordValidity);

confirmPassInput.addEventListener('focusin', confirmPassValidity);
confirmPassInput.addEventListener('focusout', confirmPassValidity);
confirmPassInput.addEventListener('input', confirmPassValidity);

// First time executing
buttonValidity();

// Functions

function buttonValidity() {
  if (isFormValid()) {
    submitButton.classList.add('main-content__submit--active');
    submitButton.classList.remove('main-content__submit--invalid');
  }
  else {
    submitButton.classList.add('main-content__submit--invalid');
    submitButton.classList.remove('main-content__submit--active');
  }
}

function emailValidity() {
  if (emailInput.validity.valid) {
    emailInput.classList.add('main-content__input--valid');
    emailInput.classList.remove('main-content__input--invalid');
    removeHelp(emailInput);
    validMap.set(emailInput.id, true);
  }
  else {
    emailInput.classList.add('main-content__input--invalid');
    emailInput.classList.remove('main-content__input--valid');
    addHelp(emailInput.validationMessage, emailInput);
    validMap.set(emailInput.id, false);
  }

  buttonValidity();
}

function countryValidity() {
  if (countrySelect.selectedOptions[0].value !== '') {
    countrySelect.classList.add('main-content__input--valid');
    countrySelect.classList.remove('main-content__input--invalid');
    removeHelp(countrySelect);
    validMap.set(countrySelect.id, true);
  }
  else {
    countrySelect.classList.add('main-content__input--invalid');
    countrySelect.classList.remove('main-content__input--valid');
    addHelp('Select a country from the list', countrySelect);
    validMap.set(countrySelect.id, false);
  }

  buttonValidity();
}

function zipValidity() {
  if (zipInput.validity.valid) {
    zipInput.classList.add('main-content__input--valid');
    zipInput.classList.remove('main-content__input--invalid');
    removeHelp(zipInput);
    validMap.set(zipInput.id, true);
  }
  else {
    zipInput.classList.add('main-content__input--invalid');
    zipInput.classList.remove('main-content__input--valid');
    addHelp(zipInput.validationMessage, zipInput);
    validMap.set(zipInput.id, false);
  }

  buttonValidity();
}

function passwordValidity() {
  if (passInput.validity.valid) {
    passInput.classList.add('main-content__input--valid');
    passInput.classList.remove('main-content__input--invalid');
    removeHelp(passInput);
    validMap.set(passInput.id, true);
  }
  else {
    passInput.classList.add('main-content__input--invalid');
    passInput.classList.remove('main-content__input--valid');
    addHelp(passInput.validationMessage, passInput);
    validMap.set(passInput.id, false);
  }

  confirmPassValidity();
  buttonValidity();
}

function confirmPassValidity() {
  if (confirmPassInput.value === passInput.value 
    && confirmPassInput.value !== '') {
    confirmPassInput.classList.add('main-content__input--valid');
    confirmPassInput.classList.remove('main-content__input--invalid');
    removeHelp(confirmPassInput);
    validMap.set(confirmPassInput.id, true);
  }
  else if (passInput.value !== '') {
    confirmPassInput.classList.add('main-content__input--invalid');
    confirmPassInput.classList.remove('main-content__input--valid');
    addHelp('Passwords do not coincide', confirmPassInput);
    validMap.set(confirmPassInput.id, false);
  }
  else {
    confirmPassInput.classList.add('main-content__input--invalid');
    confirmPassInput.classList.remove('main-content__input--valid');
    addHelp('Password cannot be empty', confirmPassInput);
    validMap.set(confirmPassInput.id, false);
  }

  buttonValidity();
}

function addHelp(message, element) {
  // If it has help already, update the message
  if (element.nextSibling.classList.contains('main-content__help')) {
    element.nextSibling.textContent = message;
    return;
  }

  // Otherwise create the help element and add it
  const helpPar = document.createElement('p');
  helpPar.classList.add('main-content__help');
  helpPar.textContent = message;
  
  element.parentNode.insertBefore(helpPar, element.nextSibling);
}

function removeHelp(element) {
  if (element.nextSibling.classList.contains('main-content__help')) {
    element.nextSibling.remove();
  }
}
