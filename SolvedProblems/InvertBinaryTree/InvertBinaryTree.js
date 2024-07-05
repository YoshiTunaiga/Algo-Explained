function invertBinaryTree(tree) {
  let queue = [tree]; // set up a queue

  while (queue.length) {
    let currentNode = queue.shift(); // get the currentNode as long as there's something on the queue.

    // Swap left with right, right with left;
    let temp = currentNode.left;
    currentNode.left = currentNode.right;
    currentNode.right = temp;

    // if there is a right or left, push them to the queue.
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return tree; // return tree;
}

invertBinaryTree(tree);

/*
{
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
*/
