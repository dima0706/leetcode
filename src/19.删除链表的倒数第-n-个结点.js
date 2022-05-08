/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let arr = [head];
  while (head.next !== null) {
    arr.push(head.next);
    head = head.next;
  }
  const len = arr.length;
  if (len === 1) {
    return head.next;
  }
  if (n === 1) {
    arr[len - 2].next = null;
  } else if (len === n) {
    return arr[1];
  } else {
    arr[len - n - 1].next = arr[len - n + 1];
  }
  return arr[0]
};
// @lc code=end
