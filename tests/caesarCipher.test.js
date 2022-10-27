// Take each letter and shift it by 1 letter forwards in the alphabet (wrap a around to z)

const cipher = require('../codes/caesarCipher')

test('characters are all shifted by 1 letter', () => {
  expect(cipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza')
});

test('characters keep their case', () => {
  expect(cipher('abCdefghijklmnopqrstuvwxYz')).toBe('bcDefghijklmnopqrstuvwxyZa')
});

test('punctuation is escaped', () => {
  expect(cipher('abcdefghijklmnopqrstuvwxyz,./@"')).toBe('bcdefghijklmnopqrstuvwxyza,./@"')
});