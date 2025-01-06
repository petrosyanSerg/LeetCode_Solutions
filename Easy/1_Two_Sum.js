/*

Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

You can return the answer in any order.

Example:

Input: nums = [3,2,4], target = 6
Output: [1,2]

 */
function twoSum(nums, target) {
  if (nums.length < 2 || !target) return console.log('Oops something went wrong!!!')

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (difference === nums[j]) return [i, j]
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))

function twoSumBestSolution(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in map) {
      return [map[diff], i];
    }
    map[nums[i]] = i;
  }

  return [];
};

console.log(twoSumBestSolution([11, 15, 2, 7], 9))
console.log(twoSumBestSolution([3, 2, 4], 6))
console.log(twoSumBestSolution([3, 3], 6))