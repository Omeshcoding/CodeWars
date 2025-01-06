// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n*10logic inside the if/else or pulling it in from the global scope.

//protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.

const memoize = (cb) => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache:', n);
      return cache[n];
    } else {
      console.log('Calculating result');
      let result = cb(n);
      cache[n] = result;
      return result;
    }
  };
};

//returned function from memoizedAdd
const memoizedTimes10 = memoize(times10);
//console.log('~~~~~~~~~~~~~Task4')
// console.log('Task 4 calculated value:', memoizedTimes10(9))
// console.log('Task 4 cached value:' , memoizedTimes10(9))
