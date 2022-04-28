/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const l = ["I", "V", "X", "L", "C", "D", "M"];
  const m = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let count = 0;
  let q = 1;

  for (let i = s.length - 1; i >= 0; i--) {
    const romanKey = s[i];
    if (m[romanKey] < count) {
      if (m[romanKey] === q) {
        count += m[romanKey];
        q = m[romanKey];
      } else {
        count -= m[romanKey];
      }
    } else {
      count += m[romanKey];
      q = m[romanKey];
    }
  }

  return count;
};
// @lc code=end