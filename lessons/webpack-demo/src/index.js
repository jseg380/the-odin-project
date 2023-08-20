import myName from './myName.js';

function component() {
  const element = document.createElement('div');

  element.innerHTML = myName('Cody');

  return element;
}

document.body.appendChild(component());
