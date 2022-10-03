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

test('should decode to the string FREE LOVE?', () => { 
  const input = 'SERR YBIR?';
  const expected = 'FREE LOVE?';

  const result = rot13(input);
  expect(result).toBe(expected);
});

test('should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', () => { 
  const input = 'GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.';
  const expected = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.';

  const result = rot13(input);
  expect(result).toBe(expected);
});
