function removeItem (array, value) {
  let i = 0;
  
  while (i < array.length) {
    if (array[i] === value) {
      array.splice(i, 1);
    }
    else {
      i++;
    }
  }

  return array;
}

const removeFromArray = function() {
  let array = arguments[0];
  let undesired = Array.from(arguments).splice(1);

  for (let i = 0; i < undesired.length; i++) {
    array = removeItem(array, undesired[i]);
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
