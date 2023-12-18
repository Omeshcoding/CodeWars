// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"

// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

function makeString(s) {
  return s
    .split(' ')
    .map((str, i) => str[0])
    .join('');
}

makeString('sees eyes xray yoat');
//  , "sexy"
//  , "Wrong result for 'sees eyes xray yoat'"
// )
// makeString("brown eyes are nice"), "bean", "Wrong result for 'brown eyes are nice'")
makeString('cars are very nice');
// , "cavn", "Wrong result for 'cars are very nice'")
makeString('kaks de gan has a big head');
// ,"kdghabh", "Wrong result for 'kaks de gan has a big head'")
