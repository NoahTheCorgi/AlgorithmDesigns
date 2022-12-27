/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((x, y) => {
        return x-y;
    });
    let i = stones.length - 1;
    while (i >= 1) {
        // y >= x
        y = stones[i];
        x = stones[i-1];
        if (x===y) {
            stones.pop();
            stones.pop();
            i -= 2;
        }
        else { // y > x
            stones.pop();
            stones[stones.length - 1] = y - x;
            stones.sort((x, y) => {
                return x-y;
            });
            i -= 1;
        }
    }
    if (stones.length < 1) {
        return 0;
    }
    return stones[0];
};

