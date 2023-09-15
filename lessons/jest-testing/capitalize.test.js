const capitalize = require('./capitalize');

test('capitalize words', () => {
  expect(capitalize('this is a test')).toBe('This is a test');
  expect(capitalize('ANOTHER test')).toBe('ANOTHER test');
  expect(capitalize('aLL this')).toBe('ALL this');
});
