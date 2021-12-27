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

/*
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
*/
