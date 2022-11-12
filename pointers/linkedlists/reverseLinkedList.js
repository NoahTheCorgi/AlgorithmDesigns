/**
 * Definition for singly-linked list.
 * class ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let p = head;
    let prev = null; // intentional
    if (p == null || p.next == null) {
        return p;
    }
    while (p != null) {
        let temp = p.next;
        p.next = prev;
        prev = p;
        p = temp;
    }
    return prev;
};
