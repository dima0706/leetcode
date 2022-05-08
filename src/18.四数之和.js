/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const len = nums.length;
  const results = [];

  if (len < 4) {
    return results;
  }

  nums.sort((a, b) => a - b);


  for (let i = 0; i < len - 3; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break;
    }
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) {
      continue;
    }

    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let left = j + 1;
      let right = len -1;

      while(left < right) {
        const count = nums[i] + nums[j] + nums[left] + nums[right];

        if (count === target) {
          results.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          while (nums[left] === nums[left - 1]) {
            left++;
          }
        } else if (count < target) {
          left++;
          while (nums[left] === nums[left - 1]) {
            left++;
          }
        } else {
          right--;
          while(nums[right] === nums[right + 1]) {
            right--;
          }
        }
      }
    }
  }

  return results;
};
// @lc code=end

console.log(fourSum([-3,-2,-1,0,0,1,2,3], 0));
