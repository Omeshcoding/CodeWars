// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let count = 0;
  const removeSpace = str.replaceAll(' ', '');

  let stringSplit = removeSpace.split('');

  for (let i = 0; i < stringSplit.length; i++) {
    switch (stringSplit[i]) {
      case 'a':
        count += 1;

        break;
      case 'e':
        count += 1;

        break;
      case 'i':
        count += 1;

      case 'o':
        count += 1;

      case 'u':
        count += 1;
        break;
    }
  }
  return count;
}
getCount('abracadabra');
