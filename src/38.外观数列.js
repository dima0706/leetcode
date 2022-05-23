/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let str = '1'
  let newStr = '';
  let i = 1;
  while(i < n) {
    let pre = '';
    let preCount = 1;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === pre) {
        preCount++;
      } else {
        if (pre) {
          newStr = `${newStr}${preCount}${pre}`;
        }
        pre = str[j];
        preCount = 1;
      }
    }
    newStr = `${newStr}${preCount}${pre}`;
    str = newStr;
    newStr = '';
    i++;
  }

  return str;
};
// @lc code=end
