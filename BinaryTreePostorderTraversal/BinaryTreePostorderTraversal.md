# Binary Tree Postorder Traversal

## Prompt

Given the **root** of a binary tree, return the postorder traversal of its nodes' values.

## Sample Input

```js
let tree = 1
            \
             2
            /
           3

let root = [1, null, 2, 3];
```

## Sample Output

```js
[3, 2, 1];
```

## Solution #1

LeetCode:

```js
const postorderTraversal = function (root, array = []) {
  let queue = [root]; // Create a queue with the root tree

  // While there is something on the queue
  while (queue.length) {
    let currentNode = queue.shift();

    if (currentNode) {
      // currentNode has a left/right, traverse the tree
      if (currentNode.left) postorderTraversal(currentNode.left, array);
      if (currentNode.right) postorderTraversal(currentNode.right, array);

      // Push the currentNode's value to the array
      array.push(currentNode.val);
    }
  }
  // Return array;
  return array;
};
```
