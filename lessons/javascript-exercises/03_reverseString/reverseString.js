const reverseString = function(string) {
  let solution = "";
  let length = string.length;

  for (let i = 0; i < length; i++) {
    solution += string[length - (1 + i)];
  }

  return solution;
};

// Do not edit below this line
module.exports = reverseString;
