const leafSimilar = (root1, root2) => {
  // helper function called
  let root1Array = traverseInOrder(root1);
  let root2Array = traverseInOrder(root2);

  // difference in array length
  if (root1Array.length !== root2Array.length) {
    return false;
  }

  // check each val
  for (let idx = 0; idx < root1Array.length; idx++) {
    if (root1Array[idx] !== root2Array[idx]) {
      return false;
    }
  }

  return true;
};

const traverseInOrder = (root) => {
  if (!root) {
    return;
  }

  let queue = [root];
  let arrayOfLeafs = [];

  while (queue.length) {
    // temp
    let currentNode = queue.pop();

    if (!currentNode.left && !currentNode.right) {
      arrayOfLeafs.push(currentNode.val);
    } else {
      // do something
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  // [6, 7, 4, 9, 8] root1
  // [6, 7, 4, 9, 8] root2
  return arrayOfLeafs;
};
