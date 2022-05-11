/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let i = 0;
  while(i !== -1) {
    if (haystack.slice(i, i + needle.length) === needle) {
      break;
    }
    const n = haystack.slice(i + 1).indexOf(needle[0]);
    if (n === -1) {
      i = -1;
      break;
    }

    i = i + 1 + n;
  }

  return i;
};
// @lc code=end

// console.log(strStr('mississippi', 'issip'));
// console.log(strStr('hello', 'll'));