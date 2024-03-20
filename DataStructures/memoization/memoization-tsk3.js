//Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.
//Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.
const memoizedClosureTimes10 = () => {
  let cache = {}; //local version
  console.log(cache);
  return (n) => {
    if (n in cache) {
      console.log('Fetching form cache:', n);
      return cache[n];
    } else {
      console.log('Calculating result');
      let result = times10(n);
      cache[n] = result;
      return result;
    }
  };
};
const memoClosureTimes10 = memoizedClosureTimes10();
console.log('~~~~~~~~~~~~~Task3~~~~~~');
console.log('Task 3 calculated value:', memoClosureTimes10(9)); //calculated
// console.log("Task 3 calculated value:", memoClosureTimes10(9)); //cache
try {
} catch (error) {
  console.error('Task 3:', e);
}
