/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length === 0) {
    if (nums2.length === 1) {
      return nums2[0];
    }
    const midIdx = Math.ceil(nums2.length / 2);
    return findMedianSortedArrays(nums2.slice(0, midIdx), nums2.slice(midIdx));
  }

  if (nums2.length === 0) {
    if (nums1.length === 1) {
      return nums1[0];
    }
    const midIdx = Math.ceil(nums1.length / 2);
    return findMedianSortedArrays(nums1.slice(0, midIdx), nums1.slice(midIdx));
  }

  if (nums1.length === 1 && nums2.length === 1) {
    return (nums1[0] + nums2[0]) / 2;
  }


  if (nums1[0] < nums2[0]) {
    nums1.shift();
  } else {
    nums2.shift();
  }

  if (nums1.length === 0) {
    return findMedianSortedArrays([], nums2.slice(0, -1));
  }
  if (nums2.length === 0) {
    return findMedianSortedArrays([], nums1.slice(0, -1));
  }

  if (nums1[nums1.length - 1] > nums2[nums2.length - 1]) {
    nums1.pop();
  } else {
    nums2.pop();
  }

  return findMedianSortedArrays(nums1, nums2);

};
// @lc code=end
