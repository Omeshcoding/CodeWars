// link https://www.codewars.com/kata/5603a4dd3d96ef798f000068/train/javascript

// Share price
// You spent all your saved money to buy some shares.

// You bought it for invested, and want to know how much it's worth, but all the info you can quickly get are just the change the shares price made in percentages.

// Your task:
// Write the function sharePrice() that calculates, and returns the current price of your share, given the following two arguments:

// invested(number), the amount of money you initially invested in the given share

// changes(array of numbers), contains your shares daily movement percentages

// The returned number, should be in string format, and it's precision should be fixed at 2 decimal numbers.

// Have fun!

// Hint: Try to write the function in a functional manner!

const sharePrice = (invested, changes) => {
  let currentPrice = invested;
  if (!changes) return invested;
  else {
    for (let change of changes) {
      currentPrice = currentPrice * (1 + change / 100);
    }
    return currentPrice.toFixed(2);
  }
};
