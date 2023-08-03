const fibonacci = function(position) {
  if (position < 0) return 'OOPS';
  
  let sequence = [0, 1];

  while (sequence.length - 1 < position) {
    const lastIndex = sequence.length - 1;
    sequence.push(sequence[lastIndex] + sequence[lastIndex - 1]);
  }

  return sequence[position];
};

// Do not edit below this line
module.exports = fibonacci;
