let root = [1, null, 2, 3];

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

postorderTraversal(root);
