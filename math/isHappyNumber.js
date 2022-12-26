/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let helper = new Set([]);
    while (true) {
        let sum = 0;
        while (n != 0) {
            let digit = n % 10;
            sum += (digit * digit);
            n = (n - digit)/10;
        }
        if (sum == 1) {
            return true;
        }
        if (helper.has(sum)) {
            return false;
        }
        helper.add(sum);
        n = sum;
    }
};

