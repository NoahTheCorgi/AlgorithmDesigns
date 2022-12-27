/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // note: initial edge case is not of concern since,
    // ... 2 <= cost.length <= 1000 is assumed
    // by tracking minimum from the end, best options are concerned
    for (let i=cost.length-3; i>=0; i--) {
        cost[i] += Math.min(cost[i+2], cost[i+1]);
    }
    return Math.min(cost[0], cost[1]);
};

