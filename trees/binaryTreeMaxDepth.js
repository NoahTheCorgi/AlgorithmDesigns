/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let helperRecursiveDFS = function(node, count, collected) {
        if (node == null) {
            collected.push(count);
            return;
        }
        count += 1;
        helperRecursiveDFS(node.left, count, collected);
        helperRecursiveDFS(node.right, count, collected);
        return;
    }
    collected = [];
    helperRecursiveDFS(root, 0, collected);
    if (collected.length == 0) {
        return 0;
    }
    // cuz javascript default sorts compares as 9 > 12 , analogous to lexicographical
    collected.sort((x, y) => {
        return x - y;
    });
    return collected[collected.length - 1];
};
