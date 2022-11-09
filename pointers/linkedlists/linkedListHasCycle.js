/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let p1 = head;
    let p2 = head;
    while (p2 != null && p2.next !=null) {
        // thankfully has checks for object comparison
        // Note: this implementation of two pointers 
        // ... of speed 1 and 2 works because gcd(1,2) = 1
        p1 = p1.next;
        p2 = p2.next.next;
        if (p1 === p2) { 
            return true;
        }
    }
    return false; 
    // Initial implementation version::
    // below is a version that is slower::
    // let helper = new Set();
    // let pointer = head;
    // while (pointer!=null && pointer.next!=null) {
    //     // thankfully has checks for object comparison
    //     if (helper.has(pointer)) {
    //         return true;
    //     }
    //     helper.add(pointer);
    //     pointer = pointer.next;
    // }
    // return false; 
};
