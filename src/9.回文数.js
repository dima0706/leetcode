/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x === 0) {
    return true;
  }
  if (x < 0 || x % 10 === 0) {
    return false;
  }

  let a = x;
  let b = 0;

  while (a > b) {
    b = b * 10 + a % 10;
    a = Math.floor(a / 10);
  }

  return a === b || a === Math.floor(b / 10);
};
// @lc code=end
