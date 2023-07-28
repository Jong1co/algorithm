/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
  function helper(n) {
    let res = [];

    if (n === 1) {
      res.push(new TreeNode(0));
    } else if (n % 2 === 1) {
      for (let i = 0; i < n; i++) {
        let j = n - 1 - i;
        for (let left of helper(i)) {
          for (let right of helper(j)) {
            let root = new TreeNode(0);
            root.left = left;
            root.right = right;
            res.push(root);
          }
        }
      }
    }
    return res;
  }
  return helper(n);
};

/**
FBT: full binary tree => 모든 자식 요소의 갯수가 0개 아니면 2개이다.
그렇다는 것은 n이 짝수일 경우에는 존재하지 않는다.(부모 노드가 무조건 있고, 그 이후에 홀수개 이기 때문에)
count까지 전달해서 1씩 빼면서 들어가.
모든 경우의 수를 만들어야 하잖아.
 */
