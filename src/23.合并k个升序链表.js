/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const fetchMinIdx = lists => {
    let idx = -1;

    for (let i = 0; i < lists.length; i++) {
      if (!lists[i] || lists[i].val === null) {
        continue;
      }
      if (idx === -1 || lists[i].val < lists[idx].val) {
        idx = i;
      }
    }

    return idx;
  }

  const curNode = new ListNode();
  let n = curNode;

  while (true) {
    const minIdx = fetchMinIdx(lists);
    if (minIdx === -1) {
      break;
    }
    n.next = lists[minIdx];
    n = n.next;
    lists[minIdx] = lists[minIdx].next;
  }

  return curNode.next;
};
// @lc code=end

