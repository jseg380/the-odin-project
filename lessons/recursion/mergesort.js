function mergeSort(array) {
  const half = Math.round(array.length / 2);
  
  if (array.length === 1) return array;

  // Left part
  const left = mergeSort(array.slice(0, half));
  // Right part
  const right = mergeSort(array.slice(half));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
    else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex === left.length) result = result.concat(right.slice(rightIndex));
  else result = result.concat(left.slice(leftIndex));

  return result;
}


function randomArray(length, max) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * max));
  }
  return array;
}


let a1 = randomArray(10, 100); 
let a2 = randomArray(9, 100); 

console.log('Original: ', a1, 'Ordered: ', mergeSort(a1), '\n');
console.log('Original: ', a2, 'Ordered: ', mergeSort(a2), '\n');
