const longestZigZag = (root) => {
  let maxOutput = 0;

  const preOrderTrav = (node, output, path) => {
    if (!node) return;

    // Update the maximum output
    maxOutput = Math.max(maxOutput, output);

    // traverse left
    if (node.left && path === "R") {
      preOrderTrav(node.left, output + 1, "L");
    } else {
      preOrderTrav(node.left, 1, "L"); // start new zig
    }

    // traverse right
    if (node.right && path === "L") {
      preOrderTrav(node.right, output + 1, "R");
    } else {
      preOrderTrav(node.right, 1, "R"); // start new zig
    }
  };

  // traverse left
  if (root.left) {
    preOrderTrav(root.left, 1, "L");
  }

  // traverse right
  if (root.right) {
    preOrderTrav(root.right, 1, "R");
  }

  return maxOutput;
};
