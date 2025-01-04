// Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

//    Matrix = array of n length whose elements are n length arrays of integers.

// [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
// ]

// returns --> 30 // 1 + 5 + 9 + 3 + 5 + 7

function sum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
    sum += matrix[i][matrix.length - 1 - i];
  }
  return sum;
}
