/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const m = new ListNode();
  m.next = head;
  
  let curNode = head;
  let arr = [m];
  let i = 0;

  while(curNode) {
    arr.push(curNode);
    
    if (i % 2 === 1) {
      if (arr[0]) {
        arr[0].next = curNode;
      }
      const temp = nextNode = curNode.next;
      curNode.next = arr[1];
      arr[1].next = temp;
      arr = [arr[1]]; 
      curNode = temp;
    } else {
      curNode = curNode.next;
    }

    i++;
  }
  
  return m.next;
};
// @lc code=end

