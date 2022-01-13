/*
{
  "tree": {
    "nodes": [
      {"id": "10", "left": "5", "right": "15", "value": 10},
      {"id": "15", "left": null, "right": "22", "value": 15},
      {"id": "22", "left": null, "right": null, "value": 22},
      {"id": "5", "left": "2", "right": "5-2", "value": 5},
      {"id": "5-2", "left": null, "right": null, "value": 5},
      {"id": "2", "left": "1", "right": null, "value": 2},
      {"id": "1", "left": null, "right": null, "value": 1}
    ],
    "root": "10"
  }
}
*/

let array = [];

function inOrderTraverse(tree, array) {
  let queue = [tree];
  while (queue.length) {
    // in order: left, root, right
    let currentNode = queue.shift();

    // Left
    if (currentNode.left) inOrderTraverse(currentNode.left, array);
    // Root
    array.push(currentNode.value);
    // Right
    if (currentNode.right) inOrderTraverse(currentNode.right, array);
  }
  return array;
}

function preOrderTraverse(tree, array) {
  let queue = [tree];
  // preOrder: root, left, right
  while (queue.length) {
    let currentNode = queue.shift();

    // Root
    array.push(currentNode.value);
    // Left
    if (currentNode.left) preOrderTraverse(currentNode.left, array);
    // Right
    if (currentNode.right) preOrderTraverse(currentNode.right, array);
  }
  return array;
}

function postOrderTraverse(tree, array) {
  let queue = [tree];
  // postOrder: left, right, root
  while (queue.length) {
    let currentNode = queue.shift();

    // Left
    if (currentNode.left) postOrderTraverse(currentNode.left, array);
    //Right
    if (currentNode.right) postOrderTraverse(currentNode.right, array);
    // Root
    array.push(currentNode.value);
  }
  return array;
}
