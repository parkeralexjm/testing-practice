// Capitalise the first character of the input string

import capitalize from '../codes/capitalize';

test('capitalizes first character', () => {
  expect(capitalize('this is now capitalized')).toBe('This is now capitalized');
});