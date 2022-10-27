/* eslint-disable no-undef */
// Add, Subtract, Divide and Multiply functions

import { add, subtract, divide, multiply } from '../codes/calculator';

test('adds numbers', () => {
  expect(add(1,4)).toBe(5);
});

test('subtracts numbers', () => {
  expect(subtract(1,4)).toBe(-3);
});

test('divides numbers', () => {
  expect(divide(4, 2)).toBe(2);
});

test('multiplies numbers', () => {
  expect(multiply(4, 2)).toBe(8);
});