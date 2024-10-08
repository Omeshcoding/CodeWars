// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
// Examples

//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
  return (
    parseInt(Math.abs(n).toString().split('').reverse().join('')) * Math.sign(n)
  );
}
reverseNumber(123);
reverseNumber(-123), reverseNumber(1000), reverseNumber(4321234);
reverseNumber(5);

reverseNumber(0);
