/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {

  const fetchLast = arr => {
    if (arr.length <= 1) {
      return arr;
    }

    const m = [];
    for (let i = 0; i < arr.length; i++) {
      const basic = arr[i];
      const n = fetchLast(arr.slice(0, i).concat(arr.slice(i + 1)));
      while(n.length > 0) {
        m.push([basic, ...n.shift()].join(''));
      }
    }
    return m;
  }

  const result = [];
  const wordStrArr = [...new Set(fetchLast(words))];
  const wordLen = wordStrArr[0].length;

  wordStrArr.forEach(str => {
    let i = -1;
    let a = 0;
    while (true) {
      i = s.slice(a).indexOf(str[0]);
      if (i === -1) {
        break;
      }
      if (s.slice(i + a, i + a + wordLen) === str) {
        result.push(i + a);
      }
      a += i + 1;
    }
  });

  return result;
};
// @lc code=end

console.log(findSubstring('bcabbcaabbccacacbabccacaababcbb', ["c","b","a","c","a","a","a","b","c"]));