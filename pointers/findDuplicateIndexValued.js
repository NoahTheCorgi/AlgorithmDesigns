/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // Idea: will use slow and fast pointers
    // and each value will then serve as the next index for each pointer
    // this is possible only because of the problem's formulation
    // since it is guaranteed to have duplicate elements there will be a match
    // loops can happen but because each start from index zero
    // and also because the possible indexes are from 1 to n
    // ===>> if there is a loop, then we have found a match anyways.
    let slow = 0;
    let fast = 0;
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow == fast) {
            // console.log("found a match!");
            break;
        }
    }
    // Sub-idea: since the fast pointer loses where the previous location is, need to search again:
    // even though a match was found, 
    // it is that the fast pointer matched the slow's location
    // the value match has yet to be found,
    // therfore, now that there is a location match,
    // that means that there is a bucket in the slow pointer's path
    // that maps to the same location from the fast pointer's path
    // and since fast is twice fast
    // , that means we need the slow pointer to go exactly the amount that it has travelled so far
    // and then that location is the value that was a match, to get to the same value,,,
    let helper = 0;
    while (true) {
        // there is guarantee to match exactly after moving the amount moved so far for slow pointer
        helper = nums[helper];
        slow = nums[slow];
        if (slow == helper) {
            return slow;
        }
    }
    // if the input is as described, below should not be reached
    return null;
};
