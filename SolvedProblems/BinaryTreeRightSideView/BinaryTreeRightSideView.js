const rightSideView = function (root) {
  if (!root) return [];

  let outputList = [root.val];
  let currQueue = [{ curr: root, level: 0 }];

  while (currQueue.length) {
    let currNode = currQueue.pop();

    if (currNode.curr.left) {
      currQueue.push({ curr: currNode.curr.left, level: currNode.level + 1 });
    }
    if (currNode.curr.right) {
      currQueue.push({ curr: currNode.curr.right, level: currNode.level + 1 });
    }

    if (outputList[currNode.level] === undefined) {
      outputList.push(currNode.curr.val);
    }
  }

  return outputList;
};

rightSideView([1, 2, 3, null, 5, null, 4]); // [1,3,4]
