/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);

  let closeSum = Infinity;

  function upgradeCloseSum(num) {
    if (closeSum === Infinity || Math.abs(num - target) < Math.abs(closeSum - target)) {
      closeSum = num;
    }
  }
  

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;

    while(left < right) {
      const s = nums[i] + nums[left] + nums[right];
      if (s === target) {
        return s;
      }
      upgradeCloseSum(s);
      if (s > target) {
        let rightTemp = right - 1;
        while (left < rightTemp && nums[rightTemp] === nums[right]) {
          rightTemp--;
        }
        right = rightTemp
      }
      if (s < target) {
        let leftTemp = left + 1;
        while (leftTemp < right && nums[leftTemp] === nums[left]) {
          leftTemp++;
        }
        left = leftTemp;
      }
    }
  }

  return closeSum;
};
// @lc code=end

console.log(threeSumClosest([-1,2,1,-4], 1));
