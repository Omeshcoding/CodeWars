// a "strng" string with length n , k is the parameter for horizontal scaling and
//      n is the parameter for vertical scaling
//when "strng" of length n is given if horizontally scaled by 2 then each character
//       will increase by a length of 1 and when vertically scaled the character
//       will return the no. of character before \n and it will be added after the
//       no. of characters vertically scaled
// abcd\nefgh\nijkl after horizontally scaling of 2 it will become
//       aabbccdd\neeffgghh\niijjkkll
//       and after vertical scaling by 2 the charcter will look like
//        aabbccdd\naabbccdd\neeffgghh\neeffgghh\niijjkkll\niijjkkll
// split each character and convert it to an array
//      then scale it horizontal 1st by further spliting the array and maping it to repeat the horizontal parameter k and join the array

//vertical scaling looping the paramenter n times and pushing the str array to squaredString array and finally joining the array with \n to get the result

function scale(strng, k, n) {
  if (strng == '') return '';
  let newStr = strng.split('\n');
  let squaredString = [];

  for (let i = 0; i < newStr.length; i++) {
    let str = newStr[i]
      .split('')
      .map((item) => item.repeat(k))
      .join('');

    for (let j = 0; j < n; j++) {
      squaredString.push(str);
    }
  }
  return squaredString.join('\n');
}

testing(scale(a, 2, 3), r);
testing(scale('', 5, 5), '');
testing(scale('Kj\nSH', 1, 2), 'Kj\nKj\nSH\nSH');
