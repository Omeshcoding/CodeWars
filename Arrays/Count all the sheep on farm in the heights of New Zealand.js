// Farmer knows how many sheep he has in total (third parameter). You need to calculate the amount of sheep lost (not returned to the farm) after final sheep count on Saturday.

// Example 1: Input: [1, 2], [3, 4], 15 --> Output: 5

// Example 2: Input: [3, 1, 2], [4, 5], 21 --> Output: 6

// Example 3: Input: [0], [4, 15], 31 --> Output: 12

// Example 4: Input: [], [4], 15 --> Output: 11

//Solution

// P = two arrays are provided one is Friday Array and one is Saturday array,
// all of them are integers, if the arry is empty it is counted as 0 3rd parameter is
// total number of ship
// R = Calculate the amount of sheep lost after final sheep count on saturday
// E = Create a variable to hold the sum of friday and saturday, check if
// the friday or saturday are empty array if it is return total else
// concat friday and saturday, map through them and get the sum which is the last
// element of the num and substract it with total.

function lostSheep(friday, saturday, total) {
  let sum = 0;

  if (friday.length === 0 && saturday.length === 0) {
    return total;
  } else {
    const num = friday.concat(saturday).map((item) => {
      sum += item;
      return sum;
    });

    return Number(total - num.slice(-1));
  }
}
