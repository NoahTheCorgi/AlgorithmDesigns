# container with most water problem solution version 5
# (source: leetcode and neetcode + from personal practices and explorations)

class Solution:
    def maxArea(self, height: List[int]) -> int:
        length = len(height)
        left, right = 0, length-1
        maxamount = min(height[left], height[right]) * (right - left)
        while (left < right):
            if (height[left] > height[right]): # move the right inward
                right -= 1
            else:
                left += 1
            maxamount = max(maxamount, min(height[left], height[right]) * (right - left))
        return maxamount
