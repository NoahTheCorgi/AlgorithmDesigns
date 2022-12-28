/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((x, y) => {
        return x - y;
    });
    let i = 0;
    // note: length must be odd
    while (i <= nums.length-3) {
        if (nums[i] != nums[i+1]) {
            return nums[i];
        }
        i += 2;
    }
    return nums[nums.length - 1];
};

