# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # initial edge  case
        if (head == None or head.next == None):
            return head
        # iterative method::
        p = head
        prev = None
        post = head.next
        while (True):
            p.next = prev
            prev = p
            p = post
            if (p == None):
                break;
            post = post.next
        head = prev
        return head

    def reverseListRecursive(self, head: Optional[ListNode]) -> Optional[ListNode]:
        return self.recursiveHelper(head, None)
    
    def recursiveHelper(self, p, prev):
        if (p == None):
            return prev
        temp = p.next
        p.next = prev
        return self.recursiveHelper(temp, p)
        