function calculator(op, a, b){
  let solution;
  switch (op.toLowerCase()) {
    case '+':
    case 'add':
      solution = a + b;
      break;
    case '-':
    case 'subtract':
      solution = a - b;
      break;
    case '*':
    case 'multiply':
      solution = a * b;
      break;
    case '/':
    case 'divide':
      if (b !== 0) solution = a / b;
      else solution = NaN;
      break;
    default:
      break;
  }
  return solution;
}

module.exports = calculator;
