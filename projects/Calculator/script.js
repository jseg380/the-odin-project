const main = document.querySelector('#main');
const secondary = document.querySelector('#secondary');
const operHistory = document.querySelector('#history');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const equal = document.querySelector('#equal');
const dot = document.querySelector('#dot');
const pi = document.querySelector('#pi');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let number1 = null;
let number2 = null;
let operator = null;

main.innerText = '0';

clear.addEventListener('click', () => {
  secondary.innerText = '';
  main.innerText = '0';
  operHistory.innerText = '';
  number1 = null;
  number2 = null;
  operator = null;
});

del.addEventListener('click', () => {
  if (main.innerText !== '0')
    main.innerText = main.innerText.slice(0, -1);
  if (main.innerText === '')
    main.innerText = '0';
});

equal.addEventListener('click', solveOperation);

dot.addEventListener('click', () => {
  if (!main.innerText.includes('.'))
    main.innerText += '.';

  if (main.getAttribute('data-modified') !== null) {
    main.innerText = '0.';
    main.removeAttribute('data-modified');
  }
});

pi.addEventListener('click', () => {
  if (main.getAttribute('data-modified') !== null)
    main.removeAttribute('data-modified');

  main.innerText = Math.PI.toFixed(3);
});


numbers.forEach(el => el.addEventListener('click', writeNumber));
operators.forEach(el => el.addEventListener('click', writeOperator));


function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (Number(y) !== 0)
    return x / y;
  else
    return 'ERROR: Dividing by 0';
}

function pow(x, y) {
  return Math.pow(x, y);
}

function mod(x, y) {
  return x % y;
}

function operate(oper, x, y) {
  let result = null;
  switch (oper) {
    case '+':
      result = add(x, y);
      break;
    case '-':
      result = subtract(x, y);
      break;
    case '*':
      result = multiply(x, y);
      break;
    case '/':
      result = divide(x, y);
      break;
    case '^':
      result = pow(x, y);
      break;
    case '%':
      result = mod(x, y);
      break;
    default:
      result = 'NOT IMPLEMENTED';
      break;
  }

  return result;
}

function writeNumber(e) {
  const number = e.target.innerText;
  if (main.getAttribute('data-modified') !== null) {
    main.removeAttribute('data-modified');
    main.innerText = number;
    return;
  }

  if (main.innerText === '0')
    main.innerText = number;
  else if (main.innerText !== 'π')
    main.innerText += number;
  else
    main.innerText = number;
}

function writeOperator(e) {
  if (number1 === null && operator === null)
    number1 = Number(main.innerText);
  else {
    number2 = Number(main.innerText);
    solveOperation();
    number1 = Number(main.innerText);
  }

  operator = e.target.innerText;
  secondary.innerText = `${number1} ${operator}`;
  main.setAttribute('data-modified', '');
}

function solveOperation() {
  if (operator !== null && number1 !== null) {
    number2 = Number(main.innerText);
    secondary.innerText = `${number1} ${operator} ${number2} =`;
    operHistory.innerText += `${number1} ${operator} ${number2} =\n`;
    let result = operate(operator, number1, number2);
    if (!isNaN(Number(result))) {
      number1 = Number(Number(result).toFixed(3));
      main.innerText = number1;
      operator = number2 = null;
      operHistory.innerText += `${number1}\n`;
    }
    else {
      secondary.innerText = result;
      operHistory.innerText += `${result}\n`;
      main.innerText = '';
      number1 = null;
      number2 = null;
      operator = null;
    }
  }
}
