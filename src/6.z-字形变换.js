/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows < 2 || s.length < 3) {
    return s;
  }

  const arr = [];
  for (let i = 0; i < numRows; i++) {
    arr[i] = [];
  }
  

  let curIdx = 0;
  let isAdd = true;

  for (let i = 0; i < s.length; i++) {
    arr[curIdx].push(s[i]);
    if (isAdd) {
      curIdx++;
      if (curIdx === numRows) {
        curIdx = numRows - 2;
        isAdd = false;
      }
    } else {
      curIdx--;
      if (curIdx === -1) {
        curIdx = 1;
        isAdd = true;
      }
    }
  }
  
  let newS = '';
  arr.forEach(o => {
    newS = `${newS}${o.join('')}`
  });

  return newS;
};
// @lc code=end
