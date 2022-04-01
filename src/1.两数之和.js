/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const a = target - num;
    if (m.get(a) !== undefined) {
      return [m.get(a), i];
    }
    m.set(num, i);
  }
};
// @lc code=end
