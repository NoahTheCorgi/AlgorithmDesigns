/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // inductive algorithm
    // from k = 3, to k = n, the previous two determines the next
    // each previous case corresponds to one case, as +1 or +2 respectively
    // note: ... <--> equivalent to n+1 th fibonacci number
    // then there is a even faster approximation formula based GR approach...
    if (n <= 2) {
        return n;
    }
    let a = 1;
    let b = 2;
    for (let i=3; i<=n; i++) {
        let helper = b;
        b = a + b;
        a = helper;
    }
    return b;
};

