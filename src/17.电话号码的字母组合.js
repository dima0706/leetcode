/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits.length) {
    return [];
  }
  const m = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const arr = digits.split('').map(i => m[i - 2]);

  function fetchNext(a, results) {
    const firstArr = (a[0] || '').split('');
    if (!firstArr.length) {
      return results;
    }
    const newResults = [];
    results.forEach(str => {
      firstArr.forEach(str2 => {
        newResults.push(str + str2);
      });
    });
    return fetchNext(a.slice(1), newResults);
  }

  return fetchNext(arr.slice(1), arr[0].split(''));
};
// @lc code=end

console.log(letterCombinations('23'));