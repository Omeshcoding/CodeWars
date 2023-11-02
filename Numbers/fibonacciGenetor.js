function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆
  let newArray = [];

  //Write your code here:
  if (n === 1) {
    newArray = [0];
  } else if (n === 2) {
    newArray = [0, 1];
  } else {
    newArray = [0, 1];
    for (let i = 0; i < n; i++) {
      newArray.push(
        newArray[newArray.length - 2] + newArray[newArray.length - 1]
      );
    }
  }

  return newArray;

  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}
