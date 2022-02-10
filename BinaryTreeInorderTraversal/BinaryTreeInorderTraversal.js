let root = [1, null, 2, 3];

const inorderTraversal = function (root, result = []) {
  if (!root) return result; // if it's null, return empty array.

  if (root.left) result = inorderTraversal(root.left, result); // if there's a left, callback the function on the left.

  result.push(root.val); // Push the val to the result's array.

  if (root.right) result = inorderTraversal(root.right, result); // if there's a right, callback the function on the right.

  return result; // return result;
};

inorderTraversal(root);
