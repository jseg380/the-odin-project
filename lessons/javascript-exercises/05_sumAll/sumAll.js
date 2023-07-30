const sumAll = function(start, end) {
  if (start < 0 || end < 0 || 
    // !['number', 'bigint'].includes(typeof(start)) || 
    // !['number', 'bigint'].includes(typeof(end))) {
    !Number.isInteger(start) || !Number.isInteger(end))
    return 'ERROR';

  if (start > end)
    [start, end] = [end, start];

  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
