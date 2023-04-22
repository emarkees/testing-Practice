const reverseString = require('./reverseString');

test('should return the string reversed', () => {
  expect(reverseString('Hello')).toBe('olleH');
});