const analyzeArray = require('./analyzeArray');

test('arrays with elements that are not numbers', () => {
  expect(() => analyzeArray(['2', 'something', {a: 1, b: 2}, 55])).toThrow(Error);
  expect(() => analyzeArray(['string', {object: true}, ['array', 'of', 'string']])).toThrow(Error);
});

test('valid arrays', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});
