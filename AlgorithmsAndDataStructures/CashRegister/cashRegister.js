function checkCashRegister(price, cash, cid) {
  let change = {};
  let rest = cash - price;
  let cashFlow = balance(cid);

  function subtract (res) {
    switch(true) {
      case (res >= 100):
        rest = Number.parseFloat(rest - 100);
        cid[8][1] = cid[8][1] - 100;
        change = addToChange(change, 'ONE HUNDRED', 100);
        break;
      case ((res/20 >= 1 ) && (cid[7][1] >= 20)):
        rest = Number.parseFloat(rest - 20);
        cid[7][1] = cid[7][1] - 20;
        change = addToChange(change, 'TWENTY', 20);
        break;
      case ((res/10 >= 1 ) && (cid[6][1] >= 10)):
        rest = Number.parseFloat(rest - 10);
        cid[6][1] = cid[6][1] - 10;
        change = addToChange(change, 'TEN', 10);
        break;
      case ((res/5 >= 1 ) && (cid[5][1] >= 5)):
        rest = Number.parseFloat(rest - 5);
        cid[5][1] = cid[5][1] - 5;
        change = addToChange(change, 'FIVE', 5);
        break;
      case ((res/1 >= 1 ) && (cid[4][1] >= 1)):
        rest = Number.parseFloat(rest - 1);
        cid[4][1] = cid[4][1] - 1;
        change = addToChange(change, 'ONE', 1);
        break;
      case ((res/0.25 >= 1 ) && (cid[3][1] >= 0.25)):
        rest = Number.parseFloat(rest - 0.25).toFixed(2);
        cid[3][1] = Number(Number.parseFloat(cid[3][1] - 0.25).toFixed(2));
        change = addToChange(change, 'QUARTER', 0.25);
        break;
      case ((res/0.10 >= 1 ) && (cid[2][1] >= 0.10)):
        rest = Number.parseFloat(rest - 0.10).toFixed(2);
        cid[2][1] = Number(Number.parseFloat(cid[2][1] - 0.10).toFixed(2));
        change = addToChange(change, 'DIME', 0.10);
        break;
      case ((res/0.05 >= 1 ) && (cid[1][1] >= 0.05)):
        rest = Number.parseFloat(rest - 0.05).toFixed(2);
        cid[1][1] = Number(Number.parseFloat(cid[1][1] - 0.05).toFixed(2));
        change = addToChange(change, 'NICKEL', 0.05);
        break;
      case ((res/0.01 >= 1 ) && (cid[0][1] >= 0.01)):
        rest = Number.parseFloat(rest - 0.01).toFixed(2);
        cid[0][1] = Number(Number.parseFloat(cid[0][1] - 0.01).toFixed(2));
        change = addToChange(change, 'PENNY', 0.01);
        break;
    }
  }

  if (rest) {
    let insufficientCheck = 0;
    while(rest > 0 && insufficientCheck != rest) {
      insufficientCheck = rest;
      subtract(rest);
    }
  }

  if (rest > cashFlow || rest > 0) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: []
    };
  }

  // get current balance
  cashFlow = balance(cid);
  let responseChange = response(change, cashFlow, cid);

  return responseChange;
}

function addToChange(change, key, value) {
  if (Object.keys(change).includes(key)) {
    change[key] = change[key] + value;
  } else {
    change[key]= value;
  }

  return change;
}

function balance(cid) {
  let cashFlow = 0;
  for (let i = 0; i < cid.length; i++) {
    cashFlow += Number(cid[i][1]);
  }

  return cashFlow;
}

function response(change, balance, cid) {
  const changeArr = [];
  const keys = [];

  for (let key in change) {
    keys.push(key);

    if (change[key] < 1) {
      change[key] = change[key] < 0.2 ? Number.parseFloat(change[key].toFixed(2)) : Number.parseFloat(change[key].toFixed(1));
    }

    changeArr.push([key, change[key]]);
  }

  let response = { 
    change: changeArr, 
  };

  if (balance > 0) {
    response = {
      ...response,
      status: "OPEN",
    }
  } else {

    response = {
      ...response,
      status: "CLOSED"
    }

    for(let i = 0; i < cid.length; i++) {
      if (! keys.includes(cid[i][0])) {
        response.change.push(cid[i]);
      }
    }
  }

  return response;
}

module.exports = {
  checkCashRegister
};