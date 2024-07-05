# Binary Tree Preorder Traversal

## Prompt

Given the root of a binary tree, return the preorder traversal of its nodes' values.

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
[1, 2, 3];
```

## Solution #1

LeetCode:

```js
const preorderTraversal = function (root, array = []) {
  let queue = [root]; // Create a queue with the root tree

  // While there is something on the queue
  while (queue.length) {
    let currentNode = queue.shift(); // Get current Node from queue (FIFO)

    // If the Node isn't null or undefined
    if (currentNode) {
      array.push(currentNode.val); // Push the currentNode's value to the array

      // currentNode has a left/right, traverse the treee
      if (currentNode.left) preorderTraversal(currentNode.left, array);
      if (currentNode.right) preorderTraversal(currentNode.right, array);
    }
  }
  // return array.
  return array;
};
```
