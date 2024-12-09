// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:
//www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript
//     dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

//     dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Solution

// array of strings
// remove all duplicates that may occur in the string
// 'cooodeittt','okkkkay','notnooow'  => codeit return the array of strings
// var=result='' var=prevCharacter='' loopover array.(map(i=>
// for(j of i){
// if(j!==prevChar){
// result +=i
// prevCharacter=i}
// return result
// }))
// =>['codeit','okay','notnow' ]

function dup(s) {
  return s.map((str) => {
    let result = ''; //store our string without duplication
    let prevCharacter = ''; //we are going to use it a assignee for our duplicate caharacters

    console.log(str);
    for (let char of str) {
      console.log(1, prevCharacter);
      if (char !== prevCharacter) {
        result += char;
        prevCharacter = char;
        console.log(2, result);
      }
    }
    return result;
  });
}

// Alternate method

function removeConsecutiveDuplicates(strings) {
  return strings.map((str) => str.replace(/(\w)\1+/g, '$1'));
}
