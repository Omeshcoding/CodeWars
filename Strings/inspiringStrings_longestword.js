// Given a string of space separated words, return the longest word.
// If there are multiple longest words, return the rightmost longest word.

// Examples
// "red white blue"  =>  "white"
// "red blue gold"   =>  "gold"

function longestWord(stringOfWords) {
  // Give me back the longest word!
  let longestword = [];
  stringOfWords.split(' ').map((char) => {
    if (longestword.length < char.length) {
      longestword.push(char);
    }
  });
  console.log(longestword.sort((a, b) => a.length - b.length));
  return longestword[longestword.length - 1];
}
