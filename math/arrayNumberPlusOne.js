/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let size = digits.length;
    let carried = 0;
    let first = true;
    for (let i=size-1; i>=0; i--) {
        let digit = digits[i];
        if (first === true) {
            digit += 1;
            first = false;
        }
        else if (carried === 0) {
            return digits;
        }
        digit += carried;
        if (digit >= 10) {
            // generalized: let newDigit = digit % 10;
            // let newDigit = 0;
            // generalized: carried = (digit - newDigit)/10;
            digits[i] = 0;
            carried = 1;
        }
        else {
            digits[i] = digit;
            carried = 0;
        }
    }
    if (carried == 0) {
        return digits;
    }
    let output = [1];
    for (let i=0; i<size; i++) {
        output.push(digits[i]);
    }
    return output;
};

