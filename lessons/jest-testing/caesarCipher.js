function caesarCipher(str, factor) {
  let newStr = '';
  for (letter of str) {
    const charCode = letter.charCodeAt(0);
    if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
      newStr += letter;
      continue;
    }

    let base;

    if (charCode <= 90) base = 'A'.charCodeAt(0);
    else base = 'a'.charCodeAt(0);

    const newCharCode = base + (((charCode - base) + factor) % 26);
    newStr += String.fromCharCode(newCharCode);
  }
  return newStr;
}

module.exports = caesarCipher;
