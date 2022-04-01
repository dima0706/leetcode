/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let curr = dummy;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    let sum = 0;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;
    curr.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    curr = curr.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummy.next;
};
// @lc code=end

// function arrFn(l1, l2) {
//   const fillEmpty = function(arr, maxLength) {
//     arr.unshift(...new Array(maxLength - arr.length))
//   }

//   const toReverseArray = function(count) {
//     return String(count).split('').reverse().map(val => Number(val))
//   }

//   let maxLength = l1.length;
//   if (l2.length > maxLength) {
//     maxLength = l2.length;
//     fillEmpty(l1, maxLength);
//   } else {
//     fillEmpty(l2, maxLength);
//   }

//   const arr = [];
//   const preCountArr = [];
//   for (let i = maxLength - 1; i >= 0; i--) {
//     const [num1 = 0, num2 = 0] = [l1[i], l2[i]];
//     const count = num1 + num2 + (preCountArr.shift() || 0);
//     let [sum, ...preCountArr2] = toReverseArray(count);
//     arr.push(sum);
//     preCountArr2.forEach((val, valIdx) => {
//       if (preCountArr[valIdx] === undefined) {
//         preCountArr[valIdx] = val;
//       } else {
//         preCountArr[valIdx] += val;
//       }
//     });
//   }
  
//   let preCount = 0;
//   preCountArr.forEach((val, valIdx) => {
//     preCount += val * Math.pow(10, valIdx);
//   });

//   return arr.concat(toReverseArray(preCount));
// }
