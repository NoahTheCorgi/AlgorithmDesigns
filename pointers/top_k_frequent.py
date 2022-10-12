# source:: leetcode and neetcode + from personal practices and explorations
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        helper = {}
        for num in nums:
            if num in helper:
                helper[num] += 1
            else:
                helper[num] = 0
        helper2 = []
        for num in helper:
            helper2.append([num, helper[num]])
        helper2.sort(key = lambda x: x[1], reverse=True);
        output = []
        length = len(helper2)
        for i in range(0, k):
            output.append(helper2[i][0])
        return output
        