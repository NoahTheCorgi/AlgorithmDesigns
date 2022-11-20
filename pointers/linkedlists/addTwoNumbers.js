/**
 * Definition for singly-linked list.
 * class ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// given two numbers represented as linked list
// ... with each node having values representing digits (1-9)
// output a linked list that represents the sum of the two input
// e.g. 7->8->9->null plus 4->5->6->null ... output: 1->4->6->1->null (987 + 654 = 1641)
var addTwoNumbers = function(l1, l2) {
    // First figure out which one is longer...
    let p1 = l1;
    let p2 = l2;
    while (p1!=null && p2!=null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    let output = null;
    let longer = null;
    let shorter = null;
    if (p2 != null) {
        longer = l2;
        shorter = l1;
    }
    else {
        longer = l1;
        shorter = l2;
    }
    output = longer;
    // Now carry out the calculation
    let carried = 0;
    let previous = null;
    while (longer!=null && shorter!=null) {
        let sum = longer.val + shorter.val + carried;
        let digit = sum % 10;
        longer.val = digit;
        if (digit != sum) {
            carried = 1;
        }
        else {
            carried = 0;
        }
        previous = longer;
        longer = longer.next;
        shorter = shorter.next;
    }
    // Deal with the remaining...
    while (longer != null) {
        let sum = longer.val + carried;
        let digit = sum % 10;
        longer.val = digit;
        if (digit != sum) {
            carried = 1;
        }
        else {
            carried = 0;
        }
        previous = longer;
        longer = longer.next;
    }
    // Deal with any remaining carried over value...
    if (carried != 0) {
        previous.next = new ListNode(carried, null);
    }
    return output;
};
