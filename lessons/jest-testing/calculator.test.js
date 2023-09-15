const calculator = require('./calculator');

test('add numbers', () => {
  expect(calculator('+', 3, 5)).toBe(8);
  expect(calculator('add', 3, 5)).toBe(8);
  expect(calculator('ADD', 3, 5)).toBe(8);
  expect(calculator('Add', 3, 5)).toBe(8);
  expect(calculator('+', -52, 52)).toBe(0);
  expect(calculator('+', 0.3, 4.3)).toBeCloseTo(4.6);
});

test('subtract numbers', () => {
  expect(calculator('-', 3, 5)).toBe(-2);
  expect(calculator('subtract', 3, 5)).toBe(-2);
  expect(calculator('SUBTRACT', 3, 5)).toBe(-2);
  expect(calculator('Subtract', 3, 5)).toBe(-2);
  expect(calculator('-', -52, 52)).toBe(-104);
  expect(calculator('-', 0.3, 4.3)).toBeCloseTo(-4.0);
});

test('multiply numbers', () => {
  expect(calculator('*', 3, 5)).toBe(15);
  expect(calculator('multiply', 3, 5)).toBe(15);
  expect(calculator('MULTIPLY', 3, 5)).toBe(15);
  expect(calculator('Multiply', 3, 5)).toBe(15);
  expect(calculator('*', 0, 52)).toBe(0);
  expect(calculator('*', -4, 4)).toBe(-16);
  expect(calculator('*', 0.5, 4.8)).toBeCloseTo(2.4);
});

test('divide numbers', () => {
  expect(calculator('/', 10, 5)).toBe(2);
  expect(calculator('divide', 10, 5)).toBe(2);
  expect(calculator('DIVIDE', 10, 5)).toBe(2);
  expect(calculator('Divide', 10, 5)).toBe(2);
  expect(calculator('/', 0, 52)).toBe(0);
  expect(calculator('/', 52, 0)).toBe(NaN);
  expect(calculator('/', -4, 4)).toBe(-1);
  expect(calculator('/', 4.8, 0.5)).toBeCloseTo(9.6);
});
