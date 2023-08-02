//솔루션을 함수를 복붙해주세요
class Node {
  constructor(x, index) {
    this.x = x;
    this.index = index;
    this.left = null;
    this.right = null;
  }
}

function solution(nodeinfo) {
  nodeinfo = nodeinfo.map((node, idx) => [...node, idx + 1]).sort((a, b) => b[1] - a[1]);

  const initValue = [nodeinfo[0][0], nodeinfo[0][2]];
  const root = new Node(...initValue);

  for (let i = 1; i < nodeinfo.length; i++) {
    const value = { x: nodeinfo[i][0], index: nodeinfo[i][2] };
    let node = root;
    while (true) {
      if (node.x < value.x && node.right === null) {
        node.right = new Node(value.x, value.index);
        break;
      }
      if (node.x < value.x && node.right !== null) {
        node = node.right;
        continue;
      }
      if (node.x > value.x && node.left === null) {
        node.left = new Node(value.x, value.index);
        break;
      }
      if (node.x > value.x && node.left !== null) {
        node = node.left;
        continue;
      }
    }
  }

  let answer = [[], []];
  const preorder = (tree, arr) => {
    if (tree !== null) {
      arr.push(tree.index);
      preorder(tree.left, arr);
      preorder(tree.right, arr);
    }
  };

  const postorder = (tree, arr) => {
    if (tree !== null) {
      postorder(tree.left, arr);
      postorder(tree.right, arr);
      arr.push(tree.index);
    }
  };

  preorder(root, answer[0]);
  postorder(root, answer[1]);

  return answer;
}
