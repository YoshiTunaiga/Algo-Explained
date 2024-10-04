const maxLevelSum = function (root) {
  if (!root.left && !root.right) return 1;

  let memo = {};
  let queue = [{ curr: root, lvl: 1 }];

  while (queue.length) {
    let currNode = queue.pop();

    // root
    if (!memo[currNode.lvl]) {
      memo[currNode.lvl] = currNode.curr.val;
    } else {
      memo[currNode.lvl] += currNode.curr.val;
    }

    // left
    if (currNode.curr.left) {
      queue.push({ curr: currNode.curr.left, lvl: currNode.lvl + 1 });
    }

    // right
    if (currNode.curr.right) {
      queue.push({ curr: currNode.curr.right, lvl: currNode.lvl + 1 });
    }
  }

  let maxSum = Math.max(...Object.values(memo));
  let index = Object.values(memo).indexOf(maxSum);

  return Number(Object.keys(memo)[index]);
};
