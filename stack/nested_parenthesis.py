from collections import deque
class Solution:
    def isValid(self, s: str) -> bool:
        reversepairs = {')':'(', ']':'[', '}':'{'}
        helperstack = [] # psuedo-stack
        for c in s:
            if c not in reversepairs:
                # keep track of all closed brackets in a stack
                helperstack.append(c)
                continue
            # if it is an opening bracket
            if (len(helperstack)==0 or helperstack[-1]!=reversepairs[c]):
                return False
            else:
                helperstack.pop()
        return len(helperstack) == 0
    