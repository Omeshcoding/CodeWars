// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  const newArray = [];
  str
    .split('')
    .reverse()
    .map((letter) => newArray.push(letter));

  return newArray.join('');
}
