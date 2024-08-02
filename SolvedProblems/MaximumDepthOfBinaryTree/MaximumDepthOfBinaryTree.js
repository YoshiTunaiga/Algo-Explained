const maxDepth = (root) => {
  if (!root) return 0;

  let queue = [root];

  let currNode = queue.pop();
  let leftDepth = maxDepth(currNode.left);
  let rightDepth = maxDepth(currNode.right);

  return Math.max(leftDepth, rightDepth) + 1;
};
