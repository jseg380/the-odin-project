const findTheOldest = function(array) {
  let maxAge = 0;

  return array.reduce((accumulator, el) => {
    let age = 0;

    if (el.hasOwnProperty('yearOfDeath'))
      age = el['yearOfDeath'] - el['yearOfBirth'];
    else
      age = (new Date().getFullYear()) - el['yearOfBirth'];

    if (age > maxAge) {
      maxAge = age;
      accumulator = el;
    }

    return accumulator;
  }, null);
};

// Do not edit below this line
module.exports = findTheOldest;
