import worldCountries from './countries.js';

const mainContent = document.createElement('form');
mainContent.classList.add('main-content');

const label = document.createElement('label');

label.htmlFor = 'email';
label.textContent = 'E-mail';
mainContent.appendChild(label.cloneNode(true));

const emailInput = document.createElement('input');
emailInput.id = 'email';
emailInput.name = 'email';
emailInput.type = 'email';
mainContent.appendChild(emailInput);


label.htmlFor = 'country';
label.textContent = 'Country';
mainContent.appendChild(label.cloneNode(true));

const countrySelect = document.createElement('select');
countrySelect.id = 'country';
countrySelect.name = 'country';
countrySelect.classList.add('main-content__input');
countrySelect.setAttribute('list', 'available-countries');

// Available countries options
let options = '<option value="">-- Please select a country --</option>';
worldCountries.forEach((country) => {
  options += `\n<option value="${country}">${country}</option>`;
});
countrySelect.innerHTML = options;
mainContent.appendChild(countrySelect);


label.htmlFor = 'zip';
label.textContent = 'Zip code';
mainContent.appendChild(label.cloneNode(true));

const zipInput = document.createElement('input');
zipInput.id = 'zip';
zipInput.name = 'zip';
zipInput.type = 'number';
zipInput.max = 99999;
zipInput.min = 0;
mainContent.appendChild(zipInput);


label.htmlFor = 'password';
label.textContent = 'Password';
mainContent.appendChild(label.cloneNode(true));

const passInput = document.createElement('input');
passInput.id = 'password';
passInput.name = 'password';
passInput.type = 'password';
mainContent.appendChild(passInput);


label.htmlFor = 'confirm-password';
label.textContent = 'Confirm password';
mainContent.appendChild(label.cloneNode(true));

const confirmPassInput = document.createElement('input');
confirmPassInput.id = 'confirm-password';
confirmPassInput.name = 'confirm-password';
confirmPassInput.type = 'password';
mainContent.appendChild(confirmPassInput);

// Add class 'main-content__label' to all the labels
mainContent.querySelectorAll('label').forEach(el => {
  el.classList.add('main-content__label');
});

// Add class 'main-content__input' to all the inputs and required attribute
mainContent.querySelectorAll('input').forEach(el => {
  el.classList.add('main-content__input');
  el.required = true;
})


const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
submitButton.classList.add('main-content__submit');
mainContent.appendChild(submitButton);

export default mainContent;
