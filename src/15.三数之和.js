/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }

  nums = nums.sort((a, b) => a - b);

  let arr = [];
  let n = nums.length;

  let j = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return arr;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        arr.push([nums[i], nums[left], nums[right]]);
        if (left < right) {
          while(nums[left] === nums[left + 1]) {
            left++;
          }
          while(nums[right] === nums[right - 1]) {
            right--;
          }
          left;
          right--;
        }
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return arr;
};
// @lc code=end

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
