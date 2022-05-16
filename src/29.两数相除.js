/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const outFc = num => {
    if (num > 0 && num > 2147483647) {
      return 2147483647;
    }
    if (num < 0 && num < -2147483648) {
      return -2147483648;
    }
    return num;
  }

  let needTransform = false;
  if (dividend < 0) {
    dividend = Math.abs(dividend);
    needTransform = !needTransform;
  }
  if (divisor < 0) {
    divisor = Math.abs(divisor);
    needTransform = !needTransform;
  }

  if (divisor === 1) {
    return outFc(needTransform ? 0 - dividend : dividend);
  }

  let num = 0;
  while(dividend >= divisor) {
    num++;
    dividend -= divisor;
  }

  return outFc(needTransform ? 0 - num : num);
};
// @lc code=end
