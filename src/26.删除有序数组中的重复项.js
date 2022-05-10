/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let len = nums.length;
  if (len === 0) {
    return 0;
  }

  let i = 1;
  let a = 1;
  while(i < len) {
    if (nums[i] !== nums[i - 1]) {
      nums[a] = nums[i];
      a++;
    }
    i++;
  }
  return a;
};
// @lc code=end
