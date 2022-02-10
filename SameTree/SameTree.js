let tree = [1, 2, 3];
let copy = [1, 2, 3];

const isSameTree = function (tree, copy, result = true) {
  // if tree and copy is not null, return true;
  if (!tree && !copy) return true;

  // if tree's value is not equal to copy's value, return false;
  if (tree?.val !== copy?.val) return false;

  // call back the function on the left and the right, then return the result;
  return (
    isSameTree(tree.left, copy.left, result) &&
    isSameTree(tree.right, copy.right, result)
  );
};

isSameTree(tree, copy);
