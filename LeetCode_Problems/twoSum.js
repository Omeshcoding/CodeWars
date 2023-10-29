// https://leetcode.com/problems/two-sum/description/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// Without complexity algorithm but is faster

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Create a Map to store the values and their indices
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement of the current number with respect to the target
    const difference = target - nums[i];

    // Check if the complement is in the Map
    if (numMap.has(difference)) {
      // If it is, return the indices of the two numbers
      return [numMap.get(difference), i];
    }
    // Otherwise, store the current number and its index in the Map
    numMap.set(nums[i], i);
  }
  // If no solution is found, return an empty array or handle it accordingly
  return [];
};

// With time complexity and less memory usage but slower
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    // Search for the complement from the remaining part of the array
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === difference) {
        return [i, j];
      }
    }
  }
  // Search for the complement from the remaining part of the array
  return [];
}
