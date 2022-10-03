function rot13(str) {
  const dictionary = {
    A : 'N',
    B : 'O',
    C : 'P',
    D : 'Q',
    E : 'R',
    F : 'S',
    G : 'T',
    H : 'U',
    I : 'V',
    J : 'W',
    K : 'X',
    L : 'Y',
    M : 'Z',
    N : 'A',
    O : 'B',
    P : 'C',
    Q : 'D',
    R : 'E',
    S : 'F',
    T : 'G',
    U : 'H',
    V : 'I',
    W : 'J',
    X : 'K',
    Y : 'L',
    Z : 'M',
  }

  let decrypted = '';
  str = str.split('');

  str.forEach(char => {
    if (Object.keys(dictionary).includes(char)) {
      decrypted += dictionary[char];
    } else {
      decrypted += char;
    }
  });

  return decrypted;
}

module.exports = {
  rot13
};
