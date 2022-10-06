const { palindrome } = require('./palindrome');
const { expect } = require('@jest/globals');

test('should return a boolean for eye string', () => { 
  const input = 'eye';
  const expected = true;

  const result = palindrome(input);
  expect(result).toBe(expected);
});

test('should return true for _eye string', () => { 
  const input = '_eye';
  const expected = true;

  const result = palindrome(input);
  expect(result).toBe(expected);
});

test('should return true for "race car" string', () => { 
  const input = 'race car';
  const expected = true;

  const result = palindrome(input);
  expect(result).toBe(expected);
});

test('should return false for "not a palindrome" string', () => { 
  const input = 'not a palindrome';
  const expected = false;

  const result = palindrome(input);
  expect(result).toBe(expected);
});

test('should return true for "A man, a plan, a canal. Panama" string', () => { 
  const input = 'A man, a plan, a canal. Panama';
  const expected = true;

  const result = palindrome(input);
  expect(result).toBe(expected);
});

test('should return true for "never odd or even" string', () => { 
  const input = 'never odd or even';
  const expected = true;

  const result = palindrome(input);
  expect(result).toBe(expected);
});

test('should return false for "nope" string', () => { 
  const input = 'nope';
  const expected = false;

  const result = palindrome(input);
  expect(result).toBe(expected);
});

test('should return false for "almostomla" string', () => { 
  const input = 'almostomla';
  const expected = false;

  const result = palindrome(input);
  expect(result).toBe(expected);
});

test('should return true for "My age is 0, 0 si ega ym." string', () => { 
  const input = 'My age is 0, 0 si ega ym.';
  const expected = true;

  const result = palindrome(input);
  expect(result).toBe(expected);
});

test('should return false for "1 eye for of 1 eye." string', () => { 
  const input = '1 eye for of 1 eye.';
  const expected = false;

  const result = palindrome(input);
  expect(result).toBe(expected);
});

test('should return true for "0_0 (: /-\ :) 0-0" string', () => { 
  const input = ' (: /-\ :) 0-0';
  const expected = true;

  const result = palindrome(input);
  expect(result).toBe(expected);
});

test('should return false for "five|\_/|four" string', () => { 
  const input = 'five|\_/|four';
  const expected = false;

  const result = palindrome(input);
  expect(result).toBe(expected);
});
