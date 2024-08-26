# Search in a Binary Search Tree

You are given the `root` of a binary search tree (BST) and an integer `val`.

Find the node in the BST that the node's value equals `val` and return the subtree rooted with that node. If such a node does not exist, return `null`.

## Sample 1

```
Example 1:

Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

Example 2:

Input: root = [4,2,7,1,3], val = 5
Output: []
```

## Solution 1

```js
const searchBST = (root, val) => {
  if (!root) return null;

  let queue = [root];
  let res = null;

  while (queue.length) {
    let curr = queue.pop();

    if (curr.val === val) {
      res = curr;
      break;
    }

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return res;
};
```
