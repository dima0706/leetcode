/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) {
    return s.length;
  }

  let max = 1;
  let preStr = '';

  s.split('').forEach(str => {
    const preIdx = preStr.indexOf(str);
    if (preIdx === -1) {
      preStr += str;
    } else {
      preStr = preStr.slice(preIdx + 1) + str;
    }
    if (preStr.length > max) {
      max = preStr.length;
    }
  });
  

  return max;
};
// @lc code=end