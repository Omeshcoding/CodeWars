// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  let total = 0;
  if (number < 0) return 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}
solution(10);

// new solution
function solution(number) {
  let numArr = [];
  let sum = 0;
  for (let i = number - 1; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      numArr.push(i);
    }
  }
  numArr.map((item) => (sum += item)).toString();
  return sum;
}

solution(9);
