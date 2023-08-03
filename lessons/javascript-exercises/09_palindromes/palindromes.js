const palindromes = function (string) {
  let newStr = string.toLowerCase();
  [' ', '!', '?', '.', ',', '\''].forEach(symbol => {
    newStr = newStr.replaceAll(symbol, '');
  });

  let palindrome = true;
  for (let i = 0; i < newStr.length / 2 && palindrome; i++)
    if (newStr[i] !== newStr[newStr.length - i - 1])
      palindrome = false;

  return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
