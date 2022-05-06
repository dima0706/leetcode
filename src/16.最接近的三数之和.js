/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);

  let result = [0];
  let closeNum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    while (left < nums.length - 1) {
      let right = nums.length - 1;
      while (left < right) {
        const curCloseNum = Math.abs(nums[i] + nums[left] + nums[right] - target);
        if (curCloseNum < closeNum) {
          closeNum = curCloseNum;
          result = [nums[i], nums[left], nums[right]];
        }
        right--;
      }
      left++;
    }
  }

  console.log(result.reduce((a, b) => a + b));
  return result.reduce((a, b) => a + b);
};
// @lc code=end

