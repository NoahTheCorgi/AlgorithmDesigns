# LinkedList has cycle?

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        # attempt 2: (source: neetcode)
        # if there is no cycle, guaranteed to terminate 
        slow, fast = head, head
        while (fast != None and fast.next !=None):
            slow = slow.next
            fast = fast.next.next
            if (slow == fast):
                return True
        return False
        
        # attempt 1:
        # Below is an implementation that is slower
        # helper = set()
        # pointer = head
        # while (pointer!=None and pointer.next != None):
        #     if (pointer in helper):
        #         return True
        #     pointercopy = pointer
        #     helper.add(pointercopy)
        #     pointer = pointer.next
        # return False
    