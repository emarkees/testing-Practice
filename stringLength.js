/*function stringLength(string) {
  return string.length;
}
module.exports = stringLength; */

function stringLength(string) {
  if (string.length === 0) {
    return new Error('Input string must be at least 1 character long.');
  } else if (string.length > 10) {
    return new Error('Input string cannot be longer than 10 characters.');
  } else {
    return string.length;
  }
}

module.exports = stringLength;

