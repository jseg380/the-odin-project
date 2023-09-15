function analyzeArray(array) {
  let min = array[0];
  let max = array[0];
  let totalSum = 0;

  array.forEach((el) => {
    if (typeof(el) !== 'number')
      throw new Error('All elements must be numbers');

    totalSum += el;
    if (el < min) min = el;
    else if (el > max) max = el;
  });

  return {
    'average': totalSum / array.length,
    'min': min,
    'max': max,
    'length': array.length
  };
}

module.exports = analyzeArray;
