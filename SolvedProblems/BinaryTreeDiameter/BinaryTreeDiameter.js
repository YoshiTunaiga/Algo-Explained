function binaryTreeDiameter(tree) {
  let diameterLength = 0;

  traverseBinaryTree(tree);
  function traverseBinaryTree(root) {
    if (root === null) return -1;
    else {
      let left = traverseBinaryTree(root.left) + 1;
      let right = traverseBinaryTree(root.right) + 1;
      if (left + right > diameterLength) diameterLength = left + right;
      return left > right ? left : right;
    }
  }
  return diameterLength;
}
