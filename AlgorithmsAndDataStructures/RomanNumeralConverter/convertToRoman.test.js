const { convertToRoman } = require('./convertToRoman');
const { expect } = require('@jest/globals');

test('should return the string II', () => { 
  const input = 2;
  const expected = 'II';

  const result = convertToRoman(input);
  expect(result).toBe(expected);
});

test('should return the string V', () => { 
  const input = 5;
  const expected = 'V';

  const result = convertToRoman(input);
  expect(result).toBe(expected);
});

test('should return the string IX', () => { 
  const input = 9;
  const expected = 'IX';

  const result = convertToRoman(input);
  expect(result).toBe(expected);
});

test('should calculate roman number of 10', () => { 
  const input = 10;
  const expected = 'X';

  const result = convertToRoman(input);
  expect(result).toBe(expected);
});

test('should return the string XXIX', () => { 
  const input = 29;
  const expected = 'XXIX';

  const result = convertToRoman(input);
  expect(result).toBe(expected);
});
