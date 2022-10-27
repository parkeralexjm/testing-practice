// Take an array of numbers and return the average, min, max and length

import analyse from '../codes/analyseArray';

test('returns an object with avg, min, max, len', () => {
  expect(analyse([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
})