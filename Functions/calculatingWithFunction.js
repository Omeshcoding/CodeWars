// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand
//     Division should be integer division. For example, this should return 2, not 2.666666...:

// eight(dividedBy(three()));

// Solution:five(): The five function is called, and it returns the number 5. So, at this point, the expression becomes seven(times(5));.

// times(5): The times function is called with the argument 5. The times function returns a new function that multiplies its argument by 5. So, at this point, the expression becomes seven([function that multiplies by 5]);.

// seven(...): The seven function is called with the argument being the function returned by times(5). The seven function takes this function as an argument and returns the result of applying that function to the number 7. In other words, it's performing the multiplication by 5.

function zero(n) {
  return n ? n(0) : 0;
}
function one(n) {
  return n ? n(1) : 1;
}
function two(n) {
  return n ? n(2) : 2;
}
function three(n) {
  return n ? n(3) : 3;
}
function four(n) {
  return n ? n(4) : 4;
}
function five(n) {
  return n ? n(5) : 5;
}
function six(n) {
  return n ? n(6) : 6;
}
function seven(n) {
  return n ? n(7) : 7;
}
function eight(n) {
  return n ? n(8) : 8;
}
function nine(n) {
  return n ? n(9) : 9;
}
function plus(a) {
  return function (b) {
    return b + a;
  };
}
function minus(a) {
  return function (b) {
    return b - a;
  };
}
function times(a) {
  return function (b) {
    return b * a;
  };
}
function dividedBy(a) {
  return function (b) {
    return Math.floor(b / a);
  };
}
console.log(seven(plus(five())));
console.log(seven(minus(five())));
console.log(seven(times(five())));
console.log(seven(divide(five())));
