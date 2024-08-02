# Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

## Sample Input

```
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
```

## Solution 1

```js
const maxDepth = (root) => {
  if (!root) return 0;
  let queue = [root];
  // let currNode = que;
  // let count = 1

  // while(queue.length) {
  let currNode = queue.pop();
  // console.log(currNode.val, currNode.left, currNode.right)
  let leftDepth = maxDepth(currNode.left);

  let rightDepth = maxDepth(currNode.right);
  // }

  return Math.max(leftDepth, rightDepth) + 1;
};
```

## Solution 2

54ms

```js
const maxDepth = (root) => {
  if (!root) return 0;

  let leftDepth = maxDepth(root.left);

  let rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};
```

Shorter solution
42ms

```js
const maxDepth = (root) => {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```
