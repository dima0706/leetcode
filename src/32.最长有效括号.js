/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let count = 0;
  const stack = [];
  stack.push(-1);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length) {
        const curCount = i - stack[stack.length - 1];
        if (curCount > count) {
          count = curCount;
        }
      } else {
        stack.push(i);
      }
    }
  }

  return count;
};
// @lc code=end

console.log(longestValidParentheses("()(()"));
