const searchBST = (root, val) => {
  if (!root) return null;

  let queue = [root];
  let res = null;

  while (queue.length) {
    let curr = queue.pop();

    if (curr.val === val) {
      res = curr;
      break;
    }
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return res;
};
