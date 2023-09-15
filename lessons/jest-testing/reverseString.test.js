const reverseString = require('./reverseString');

test('reverse strings', () => {
  expect(reverseString('this is a test')).toBe('tset a si siht');
  expect(reverseString('ANOTHER test')).toBe('tset REHTONA');
  expect(reverseString('aLL this')).toBe('siht LLa');
});
