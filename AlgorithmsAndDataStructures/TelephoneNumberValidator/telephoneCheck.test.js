const { telephoneCheck } = require('./telephoneCheck');
const { expect } = require('@jest/globals');

test('should return a boolean', () => { 
  const input = '555-555-5555';
  const expected = true;

  const result = telephoneCheck(input);
  expect(result).toBe(expected);
});

test('should return false', () => { 
  const input = '123**&!!asdf#';
  const expected = false;

  const result = telephoneCheck(input);
  expect(result).toBe(expected);
});

test('should return false only open parenthesis', () => { 
  const input = '(555-555-5555';
  const expected = false;

  const result = telephoneCheck(input);
  expect(result).toBe(expected);
});

test('should return false only close parenthesis', () => { 
  const input = '1 555)555-5555';
  const expected = false;

  const result = telephoneCheck(input);
  expect(result).toBe(expected);
});

test('should return true no parenthesis', () => { 
  const input = '1 555-555-5555';
  const expected = true;

  const result = telephoneCheck(input);
  expect(result).toBe(expected);
});

test('should return true with parenthesis', () => { 
  const input = '1 (555) 555-5555';
  const expected = true;

  const result = telephoneCheck(input);
  expect(result).toBe(expected);
});

test('should return false with parenthesis', () => { 
  const input = '(6054756961)';
  const expected = false;

  const result = telephoneCheck(input);
  expect(result).toBe(expected);
});

test('should return true with negative numbers', () => { 
  const input = '-1 (757) 622-7382';
  const expected = false;

  const result = telephoneCheck(input);
  expect(result).toBe(expected);
});

test('should return true with wrong format', () => { 
  const input = '55 55-55-555-5';
  const expected = false;

  const result = telephoneCheck(input);
  expect(result).toBe(expected);
});
