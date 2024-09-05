const pathSum = (root, targetSum) => {
  if (!root) return 0;
  // int to return
  let numOfPaths = 0;

  // root, left, right => preOrder traversal
  const preOrderRecursion = (root, targetSum) => {
    // compute root
    sumCurrPath(root, 0, targetSum);

    // traverse left
    if (root.left) preOrderRecursion(root.left, targetSum);

    // traverse right
    if (root.right) preOrderRecursion(root.right, targetSum);
  };

  // Compute current node
  const sumCurrPath = (root, currSum, targetSum) => {
    currSum += root.val;

    if (targetSum === currSum) {
      numOfPaths++;
    }

    // if there is a left, sum from this point
    if (root.left) {
      sumCurrPath(root.left, currSum, targetSum);
    }

    // if there is a right, sum from this point
    if (root.right) {
      sumCurrPath(root.right, currSum, targetSum);
    }
  };

  preOrderRecursion(root, targetSum);

  return numOfPaths;
};
