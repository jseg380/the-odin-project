const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(array) {
  return array.reduce((total, element) => total + element, 0);
};

const multiply = function(array) {
  return array.reduce((total, element) => total * element, 1);
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(number) {
  if (number === 0) return 1;
  else return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
