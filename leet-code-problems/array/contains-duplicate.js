// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containsDuplicate = (nums) => {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (!numMap[nums[i]]) {
      numMap[nums[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
};

// 1 line solution, set data structure does not allow duplicates. If original array length is nor equal to set size, it means a duplicate is detected.
const containDuplicate = (nums) => {
  return nums.length !== new Set(nums).size;
};
