/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const n = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  let m = [{}, {}, {}];
  let l = {};
  for (let i = 0; i < 9; i++) {
    if (i % 3 === 0) {
      m = [{}, {}, {}];
    }
    l = {};
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val === '.') {
        continue;
      }
      if (l[val]) {
        return false;
      } else {
        l[val] = true;
      }
      if (n[j][val]) {
        return false;
      } else {
        n[j][val] = true;
      }
      const mIdx = Math.floor(j / 3);
      if (m[mIdx][val]) {
        return false;
      } else {
        m[mIdx][val] = true;
      }
    }
  }
  return true;
};
// @lc code=end

console.log(isValidSudoku([[".",".","4",".",".",".","6","3","."],[".",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".","9","."],[".",".",".","5","6",".",".",".","."],["4",".","3",".",".",".",".",".","1"],[".",".",".","7",".",".",".",".","."],[".",".",".","5",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]]))