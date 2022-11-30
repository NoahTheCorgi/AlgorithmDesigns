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
  let pointer1 = head;
  let count = 1;
  while (count <= n + 1) {
    if (pointer1 == null) {
      if (count == n + 1) {
        // when length is exactly n
        let output = head.next;
        head.next = null;
        return output;
      } else {
        console.log("Error: input not valid, not long enough...");
        return null;
      }
    }
    pointer1 = pointer1.next;
    count += 1;
  }
  // now the pointer1 is pointing at the n+2 th node...
  let pointerPreviousPrevious = head;
  while (pointer1 != null) {
    pointer1 = pointer1.next;
    pointerPreviousPrevious = pointerPreviousPrevious.next;
  }
  pointerPreviousPrevious.next = pointerPreviousPrevious.next.next;
  return head;
};
