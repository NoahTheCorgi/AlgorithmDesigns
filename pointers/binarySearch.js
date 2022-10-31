/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let length = nums.length;
    let range = [0, length-1]; // inclusive range of indexes possible
    while (range[1]-range[0] >= 0) {
        let pointer = range[0] + Math.floor((range[1] - range[0])/2);
        if (nums[pointer] === target) {
            return pointer;
        }
        else if (nums[pointer] > target) {
            // target has to be on the left side
            range = [range[0], pointer - 1]; // end is not inclusive
        }
        else if (nums[pointer] < target) {
            // target has to be on the right side
            range = [pointer + 1, range[1]];
        }
    }
    return -1;
};
