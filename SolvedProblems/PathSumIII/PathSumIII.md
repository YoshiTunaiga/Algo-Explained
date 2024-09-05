# Path Sum III

Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

## Sample 1

```
Example 1:
Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.

Example 2:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3
```

## Solution 1

```js
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
```
