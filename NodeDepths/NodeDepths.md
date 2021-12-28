# Node Depths

The distance between a node in a Binary Tree and the tree's root is called the node's depth.

Write a function that takes in a Binary Tree and returns the sum of its nodes's depths.
Each BinaryTree node has an integer value, a left child node, and a right child node.
Children nodes can either be BinaryTree nodes themselves or None/null.

## Sample Input

```javascript
tree =    1
        /   \
      2      3
     / \    /  \
    4   5  6    7
   / \
  8   9


{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": "6", "right": "7", "value": 3},
      {"id": "4", "left": "8", "right": "9", "value": 4},
      {"id": "5", "left": null, "right": null, "value": 5},
      {"id": "6", "left": null, "right": null, "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9}
    ],
    "root": "1"
  }
}
```

## Sample Output

```javascript
16  // Total depth

// The depth of the node with value 2 is 1.
// The depth of the node with value 3 is 1.
// The depth of the node with value 4 is 2.
// The depth of the node with value 5 is 2.
// The depth of the node with value 6 is 2.
// The depth of the node with value 7 is 2.
// The depth of the node with value 8 is 3.
// The depth of the node with value 9 is 3.

Summing all of these depths yields 16.
```

## Solution #1

```javascript
function nodeDepths(root) {
  let memo = []; // Establish a memoization;
  let totalDepth = 0; // Declare a total to 0;

  // Start a queue to keep track of the nodes
  let queue = [{ node: root, depth: 0 }];

  // While the queue has a node
  while (queue.length) {
    // FIFO: Get the first node from queue
    let currentNode = queue.shift();

    // If the currentNode's left it's not null
    if (currentNode.node.left) {
      // add the depth to the node and push it to the queue
      queue.push({ node: currentNode.node.left, depth: currentNode.depth + 1 });
    }

    // If the currentNode's right it's not null
    if (currentNode.node.right) {
      // add the depth to the node and push it to the queue
      queue.push({
        node: currentNode.node.right,
        depth: currentNode.depth + 1,
      });
    }

    // process the currentNode by pushing it to the memo;
    memo.push(currentNode);
  }

  // Loop through the memo and get the totalDepth of each node.
  for (let i = 0; i < memo.length; i++) totalDepth += memo[i].depth;
  return totalDepth;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```
