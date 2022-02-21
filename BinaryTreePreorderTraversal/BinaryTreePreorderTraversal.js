let root = [1, null, 2, 3];

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

preorderTraversal(root);
