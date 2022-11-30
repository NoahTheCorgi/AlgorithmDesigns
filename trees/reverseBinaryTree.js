/**
 * Definition for a binary tree node.
 * class TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // initial edge case / as well as base case
  if (root === null) {
    return root;
  }
  // helper for swapping left and right
  let helper = root.left;
  root.left = root.right;
  root.right = helper;
  // recursive calls DFS
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
