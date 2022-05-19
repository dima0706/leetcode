/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (k === 1) {
    return head;
  }

  const reverseFc = (l, r) => {
    const n = r;
    while(l.next !== n) {
      const t = l.next;
      l.next = r; 
      r = l;
      l = t;
    }
    l.next = r;
    return l;
  }

  let left = new ListNode();
  left.next = head;
  let pre = left;

  let i = 1;
  while(!!head) {
    if (i === k) {
      const last = pre.next
      const hair = reverseFc(last, head.next);
      pre.next = hair;
      pre = last;
      head = last.next;
      i = 1;
    } else {
      head = head.next;
      i++;
    }
  }
  

  return left.next;
};
// @lc code=end
