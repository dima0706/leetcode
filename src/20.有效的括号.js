/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      arr.unshift(s[i]);
      continue;
    }

    if (s[i] === ')') {
      if (arr[0] === '(') {
        arr.shift();
      } else {
        return false;
      }
    } else if (s[i] === '}') {
      if (arr[0] === '{') {
        arr.shift();
      } else {
        return false;
      }
    } else if (s[i] === ']') {
      if (arr[0] === '[') {
        arr.shift();
      } else {
        return false;
      }
    }
  }

  return !arr.length;
};
// @lc code=end

console.log(isValid('([)]'));