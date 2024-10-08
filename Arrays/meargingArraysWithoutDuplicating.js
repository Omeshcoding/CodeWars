// Merging sorted integer arrays (without duplicates)
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
  const mergedArr = new Set([...a, ...b]);
  const sortedArray = [...mergedArr].sort((a, b) => a - b);
  return sortedArray;
}

mergeArrays([1, 3, 5], [2, 4, 6]);
// [1, 2, 3, 4, 5, 6];
mergeArrays([2, 4, 8], [2, 4, 6]);
// [2, 4, 6, 8];
