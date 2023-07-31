//솔루션을 함수를 복붙해주세요
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node, cloneNodes = new Map()) {
  if (!node) return null;
  if (cloneNodes.has(node)) return cloneNodes.get(node);

  const cloneNode = new Node(node.val);
  cloneNodes.set(node, cloneNode);

  for (const neighbor of node.neighbors) {
    const cloneNeighbor = cloneGraph(neighbor, cloneNodes);
    cloneNode.neighbors.push(cloneNeighbor);
  }

  return cloneNode;
};
