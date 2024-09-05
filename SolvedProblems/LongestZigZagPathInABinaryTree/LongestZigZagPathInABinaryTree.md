# Longest ZigZag Path in a Binary Tree

You are given the root of a binary tree.

A ZigZag path for a binary tree is defined as follow:

Choose any node in the binary tree and a direction (right or left).
If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
Change the direction from right to left or from left to right.
Repeat the second and third steps until you can't move in the tree.
Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return the longest ZigZag path contained in that tree.

## Sample 1

```
Example 1:
Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
Output: 3
Explanation: Longest ZigZag path in blue nodes (right -> left -> right).

Example 2:
Input: root = [1,1,1,null,1,null,null,1,1,null,1]
Output: 4
Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).

Example 3:
Input: root = [1]
Output: 0
```

## Solution 1

```js
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
```

### Notes

```
/**
    Input: tree [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]

    Output: integer equivalent to the longest zig zag

    Variables:
        - maxOutput = 0;
        - output = 0;
        - path = right || left ("")

    Edge Cases:
        - root is only one, return 0

    Approach:
        Pre-order
        1st. we on root
            traverse from the current root
        2nd we turn to the next node
            if(node is left) move to the next
            if(node is right) move to the next

        3rd. for each traverse, if the path is not equal to the current path, count 1

        4th. if the path is equal, set 0
         maxOutput = Math.max(maxOutput, output)

    Root
   /     \
        right -> output = 0
        /     \ path = R
oup= 1 left     right -> output = 1
        path L   /     \ path R
    oup=2    left.     right -> output = 1
                \ path = R
                right oup=3
                  \  path = R
                  right oup=1

 */
```
