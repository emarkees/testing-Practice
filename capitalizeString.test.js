const capitalizeString = require ('./capitalizeString');

test('should return the first string capitalized', () => {
  expect(capitalizeString('hello')).toBe('Hello');
});