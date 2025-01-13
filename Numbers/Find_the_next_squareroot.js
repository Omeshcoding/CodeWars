// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
// Examples ( Input --> Output )

// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

// is a argument that might be a perfect square or not
//  return will be the next perfect square after that argument
//  if I get 121 = then the next perfect square will be 144
//  get the squareroot of the number and just increment it by 1 and return the square of
// that number

function findNextSquare(sq) {
  const num = Math.sqrt(sq);

  if (Number(num) === num && num % 1 !== 0) {
    return -1;
  } else {
    return Math.pow(num + 1, 2);
  }
}
