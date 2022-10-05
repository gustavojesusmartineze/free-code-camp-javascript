function telephoneCheck(str) {
  let notValid = /[&\/\\#,+$~%.'":*?<>{}]/g;
  let num = str.replace(/[&\/\\#,+$~%.'":*?<>{}\s]/g, '');
  let numLength = str.replace(/[&\/\\#,+()$~%.'":*?<>{}-\s]/g, '');
  let open = num.includes('(');
  let close = num.includes(')');
  let dash = num.includes('-');

  if (str.match(notValid)) {
    return false;
  }

  if (numLength.length === 10) {
    if ((open && !close) || (!open && close)) {
      return false;
    } else if (open && close) {
      if (num[0] != '(' || num[4] != ')') {
        return false;
      }
    }
    if (dash) {
      if (num[num.length -5] != '-') {
        return false;
      }
    }
  } else if (numLength.length === 11) {
    if (num[0] != 1) {
      return false;
    }

    if ((open && !close) || (!open && close)) {
      return false;
    } else if (open && close) {
      if (num[1] !== '(' || num[5] !== ')') {
        return false;
      }
    }
    if (dash) {
      if (num[num.length -5] != '-') {
        return false;
      }
    }
  } else if (numLength.length < 10 || numLength.length > 11) {
    return false
  }

  return true;
}

module.exports = {
  telephoneCheck
};