class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        #heapq.heapify(stones)
        stones.sort() # O(nlog(n))
        i = len(stones) - 1
        while (i >= 1):
            # y >= x
            y = stones[i]
            x = stones[i-1]
            if (x == y):
                stones.pop()
                stones.pop()
                i -= 2
            else: # y > x
                newStone = y - x
                stones.pop()
                stones.pop()
                stones.append(newStone)
                # this part could be optimized using heap structure
                stones.sort() # --> O( < n * nlog(n))
                i -= 1
        if (len(stones) < 1):
            return 0
        return stones[0]
        
