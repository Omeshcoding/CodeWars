// https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript

// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

//     Years divisible by 4 are leap years,
//     but years divisible by 100 are not leap years,
//     but years divisible by 400 are leap years.

// Tested years are in range 1600 ≤ year ≤ 4000.
// Date Time
// Algorithms

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? true
    : false;
}
isLeapYear(2000);
isLeapYear(2020);
isLeapYear(2100);
