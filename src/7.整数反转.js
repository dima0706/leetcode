/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x === 0) {
    return 0;
  }
  
  const max = Math.pow(2, 31);
  const base = x > 0 ? 1 : -1;
  if (base === 1) {
    max - 1;
  }
  
  x = Number(String(x * base).split('').reverse().join(''));
  
  return x > max ? 0 : x * base;
};
// @lc code=end
