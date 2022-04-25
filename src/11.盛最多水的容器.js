/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

  let max = 0;

  let hLength = height.length;
  for (let i = 0; i < hLength - 1; i++) {
    const a = height[i];
    
    if (a > (max / hLength - i - 1)) {
      for (let j = i + 1; j < hLength; j++) {
        const b = height[j];
        const num = (j - i) * (b > a ? a : b);
        if (num > max) {
          max = num;
        }
      }
    }
  }

  return max;
};
// @lc code=end
