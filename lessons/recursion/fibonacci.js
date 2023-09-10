function fibs(length) {
  if (length < 0) return;
  if (length === 1) return [0];

  let array = [0, 1];
  
  for (let i = 1; i < length - 1; i++) {
    array.push(array[i-1] + array[i]);
  }

  return array;
}

console.log(fibs(8));

function fibsRec(length) {
  if (length === 2) return [0, 1];

  let array = fibsRec(length - 1);
  array.push(array[length - 3] + array[length - 2]);

  return array;
}

console.log(fibsRec(8));
