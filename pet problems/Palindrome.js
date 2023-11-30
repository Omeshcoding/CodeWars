// Palindrome function in Javascript

function palindrome(str) {
  str = str.replace(/\s+|,|\.|[^A-Za-z0-9]+/g, '').toLowerCase();
  let newArray = [...str];
  let arr = [];
  for (let i = newArray.length - 1; i >= 0; i--) {
    arr.push(newArray[i]);
  }
  let ar = arr.toString().replace(/,/g, '');
  if (ar === str) {
    return true;
  } else {
    return false;
  }
}

palindrome('0_0 (: /- :) 0-0');
