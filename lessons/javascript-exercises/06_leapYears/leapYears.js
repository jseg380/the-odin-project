const leapYears = function(year) {
  if (year < 0 || !Number.isInteger(year)) return 'ERROR';

  let leapYear = false;
  // Leap years are divisible by four.
  // However years that are divisible by 100 are leap years only if
  // they are divisible by 400
  if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0)))
    leapYear = true;

  return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
