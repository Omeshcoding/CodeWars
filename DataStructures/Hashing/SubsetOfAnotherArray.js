// Check if an array is subset of another array
// Given two arrays a[] and b[] of size m and n respectively, the task is to determine whether b[] is a subset of a[].Both arrays are not sorted, and elements are distinct.

// Examples:

// Input: a[] = [11, 1, 13, 21, 3, 7], b[] = [11, 3, 7, 1]
// Output: true

// Input: a[]= [1, 2, 3, 4, 5, 6], b = [1, 2, 4]
// Output: true

// Input: a[] = [10, 5, 2, 23, 19], b = [19, 5, 3]
// Output: false

function isSubset(a, b) {
  const hashSet = new Set(a);

  for (const num of b) {
    if (!hashSet.has(num)) {
      return false;
    }
  }

  return true;
}

const a = [11, 1, 13, 21, 3, 7];
const b = [11, 3, 7, 1];

if (isSubset(a, b)) {
  console.log('true');
} else {
  console.log('false');
}

// The time complexity : O(m + n), where m and n are the size of a and b respectively
