const { rot13 } = require('./caesarsCipher');
const { expect } = require('@jest/globals');

test('should decode to the string FREE CODE CAMP', () => { 
  const input = 'SERR PBQR PNZC';
  const expected = 'FREE CODE CAMP';

  const result = rot13(input);
  expect(result).toBe(expected);
});

test('should decode to the string FREE PIZZA!', () => { 
  const input = 'SERR CVMMN!';
  const expected = 'FREE PIZZA!';

  const result = rot13(input);
  expect(result).toBe(expected);
});

