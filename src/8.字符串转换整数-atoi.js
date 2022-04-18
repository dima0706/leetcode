/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  s = s.trim();

  let prefix = '';
  if (['+', '-'].includes(s[0])) {
    prefix = s[0];
    s = s.slice(1);
  }

  let numStr = '';
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i]) || s[i] === ' ') {
      break;
    } else {
      numStr = `${numStr}${s[i]}`;
    }
  }

  if (!numStr) {
    return '0';
  }

  let maxNum = Math.pow(2, 31);
  if (prefix !== '-') {
    maxNum--;
  }

  if (Number(numStr) > maxNum) {
    numStr = `${maxNum}`;
  }


  return `${prefix}${numStr}`;
};
// @lc code=end
