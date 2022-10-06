function palindrome(str) {
  const cleanWord = str.split('').reduce((accum, current) => {
    if ( current.match(/[a-zA-Z0-9]/i) ) {
      accum += current.toLowerCase();
    }
    return accum;
  },'');

  const revertedWord = cleanWord.split('').reverse().join('');

  return cleanWord === revertedWord;
}

module.exports = {
  palindrome
};
