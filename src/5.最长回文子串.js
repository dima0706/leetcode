/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }

  let maxStr = "";

  for (let i = 0; i < s.length; i++) {
    const curMaxStr = search(s, i);
    if (curMaxStr.length > maxStr.length) {
      maxStr = curMaxStr;
    }
  }

  return maxStr;

  function search(s, start, curMaxStr = "") {
    if (s.length - start - 1 <= curMaxStr.length) {
      return curMaxStr;
    }

    for (let j = start + 1; j <= s.length; j++) {
      let curStr = s.slice(start, j);
      if (
        curStr === curStr.split("").reverse().join("") &&
        curStr.length > curMaxStr.length
      ) {
        curMaxStr = curStr;
      }
    }

    return search(s, start + 1, curMaxStr);
  }
};
// @lc code=end

console.log(longestPalindrome("babad"));
