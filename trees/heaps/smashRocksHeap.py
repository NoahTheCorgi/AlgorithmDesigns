class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        if (len(stones) == 0):
            return 0
        if (len(stones) == 1):
            return stones[0]
        # reverse values since we need max heap
        for i in range(len(stones)):
            stones[i] = -(stones[i])
        # min heap
        heapq.heapify(stones)
        while (len(stones) > 1):
            # y >= x
            y = stones[0]
            if (len(stones) == 2):
                x = stones[1]
            else: # len(stones) >= 3
                if (stones[1] <= stones[2]):
                    x = stones[1]
                else:
                    x = stones[2]
            # x and y are set to be 'smashed'
            smashed = y - x
            if (smashed == 0):
                heapq.heappop(stones)
                heapq.heappop(stones)
            else: # smashed > 0
                heapq.heappop(stones)
                heapq.heapreplace(stones, smashed)
        if (len(stones) == 1):
            return -(stones[0])
        return 0

