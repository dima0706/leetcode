/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

  let a = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      continue;
    }
    nums[a] = nums[i];
    a++;
  }

  nums.length = a;

  return a;
};
// @lc code=end
