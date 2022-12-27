/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let helper = function(p, q, outcome) {
        if (outcome[0] == false) {
            return;
        }
        if (p == null || q == null) {
            if (p != null || q != null) {
                outcome[0] = false;
                return;
            }
            else { // both are null
                return;
            }
        }
        if (p.val !== q.val) {
            outcome[0] = false;
            return;
        }
        helper(p.left, q.left, outcome);
        helper(p.right, q.right, outcome);
    }
    let outcome = [true];
    helper(p, q, outcome);
    return outcome[0];
};
