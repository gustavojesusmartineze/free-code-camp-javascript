const { checkCashRegister } = require('./cashRegister');
const { expect } = require('@jest/globals');

test('should return an object', () => {
  const price = 19.5;
  const cash = 20;
  const cid = [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1],
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]
  ];

  const expected = {
    status: "OPEN", 
    change: [["QUARTER", 0.5]]
  };

  const result = checkCashRegister(price, cash, cid);
  expect(result).toStrictEqual(expected);
});

test('should return status: "OPEN" Case 1', () => {
  const price = 19.5;
  const cash = 20;
  const cid = [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]
  ];

  const expected = {
    status: "OPEN", 
    change: [
      ["QUARTER", 0.5]
    ]
  };

  const result = checkCashRegister(price, cash, cid);
  expect(result).toStrictEqual(expected);
});

test('should return status: "OPEN" Case 2', () => { 
  const price = 3.26;
  const cash = 100;
  const cid = [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]
  ];

  const expected = {
    status: "OPEN", 
    change: [
      ["TWENTY", 60], 
      ["TEN", 20], 
      ["FIVE", 15], 
      ["ONE", 1], 
      ["QUARTER", 0.5], 
      ["DIME", 0.2], 
      ["PENNY", 0.04]
    ]
  };

  const result = checkCashRegister(price, cash, cid);
  expect(result).toStrictEqual(expected);
});

test('should return {status: "INSUFFICIENT_FUNDS", change: []}', () => {
  const price = 19.5;
  const cash = 20;
  const cid = [
    ["PENNY", 0.01], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0], 
    ["ONE", 0],
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ];

  const expected = {
    status: "INSUFFICIENT_FUNDS",
    change: []
  };

  const result = checkCashRegister(price, cash, cid);
  expect(result).toStrictEqual(expected);
});


test('should return {status: "INSUFFICIENT_FUNDS", change: []} Case 2', () => {
  const price = 19.5;
  const cash = 20;
  const cid = [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1], 
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ];

  const expected = {
    status: "INSUFFICIENT_FUNDS",
    change: []
  };

  const result = checkCashRegister(price, cash, cid);
  expect(result).toStrictEqual(expected);
});

test('should return {status: "CLOSED"', () => {
  const price = 19.5;
  const cash = 20;
  const cid = [
    ["PENNY", 0.5], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0], 
    ["ONE", 0], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0], 
    ["ONE HUNDRED", 0]
  ];

  const expected = {
    status: "CLOSED", 
    change: [
      ["PENNY", 0.5], 
      ["NICKEL", 0], 
      ["DIME", 0], 
      ["QUARTER", 0], 
      ["ONE", 0], 
      ["FIVE", 0], 
      ["TEN", 0], 
      ["TWENTY", 0], 
      ["ONE HUNDRED", 0]
    ]
  };

  const result = checkCashRegister(price, cash, cid);
  expect(result).toStrictEqual(expected);
});
