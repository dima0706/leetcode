/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let i = 0;
  let preStr = '';
  let count = strs[0].length;
  
  while (count > i) {
    const curSymbol = strs[0][i];
    const unPass = !curSymbol || strs.some(str => str[i] !== curSymbol);
    if (unPass) {
      return preStr;
    }
    preStr += curSymbol;
    i++;
  }

  return preStr;
};
// @lc code=end

console.log(longestCommonPrefix(["flower","flow","flight"]));
