// Capitalise the first character of the input string

const capitalize = require('../codes/capitalize');

test('capitalizes first character', () => {
  expect(capitalize('this is now capitalized')).toBe('This is now capitalized');
});