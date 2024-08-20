const goodNodes = (root) => {
  if (!root.left && !root.right) return 1;

  let queue = [root];
  let maxQueue = [-Infinity];
  let count = 0;

  while (queue.length) {
    let currNode = queue.pop();
    let max = maxQueue.pop();
    // there is a diff max in every floor
    max = Math.max(currNode.val, max);

    if (max === currNode.val) count++;

    if (currNode.left) {
      queue.push(currNode.left);
      maxQueue.push(max);
    }

    if (currNode.right) {
      queue.push(currNode.right);
      maxQueue.push(max);
    }
  }

  return count;
};
