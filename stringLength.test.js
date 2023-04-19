const stringLength = require('./stringLength');

test('stringLength', () => {
  expect(stringLength('Hello')).toBe(5);
});