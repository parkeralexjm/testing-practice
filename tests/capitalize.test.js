// Expect 'This is now capitalized' when passed 'this is now capitalized'

const capitalize = require('../codes/capitalize');

test('capitalizes first character', () => {
  expect(capitalize('this is now capitalized')).toBe('This is now capitalized');
});