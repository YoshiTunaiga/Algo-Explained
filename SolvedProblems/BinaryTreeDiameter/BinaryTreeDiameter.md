# Binary Tree Diameter

## Prompt

Write a function that takes in a Binary Tree and returns its diameter. The diameter of a binary tree is defined as the length of its longest path, even if that path doesn't pass through the root of the tree.

A path is a collection of connected nodes in a tree, where no node is connected to more than two other nodes. The length of a path is the number of edges between the path's first node and its last node.

Each **BinaryTree** node has an integer **value**, a **left** child node, and a **right** child node.

Children nodes can either be **BinaryTree** nodes themselves or **None**/ **null**.

## Sample Input

```js
tree =            1
                /    \
              3       2
            /   \
          7       4
        /          \
      8             5
    /                \
  9                  6
```

## Sample Output

```js
6; // 9 -> 8 -> 7 -> 3 -> 4 -> 5 -> 6
/* There are 6 edges betweeen the first node and the last node of this tree's longest path.*/
```

## Solution #1

```js
function binaryTreeDiameter(tree) {
  let diameterLength = 0;

  traverseBinaryTree(tree);
  function traverseBinaryTree(root) {
    if (root === null) return -1;
    else {
      let left = traverseBinaryTree(root.left) + 1;
      let right = traverseBinaryTree(root.right) + 1;
      if (left + right > diameterLength) diameterLength = left + right;
      return left > right ? left : right;
    }
  }
  return diameterLength;
}
```

## Solution #2

LeetCode => Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

```js
const diameterOfBinaryTree = function (root) {
  // Get a diameterLength for the depth
  let diameterLength = 0;
  // callback Function on the root
  traverseBinaryTree(root);

  function traverseBinaryTree(node) {
    // if (node is null) return -1
    if (node === null) return -1;
    else {
      // Left: if (currentNode has a left) traverse currentleft plus 1
      // right: if (currentNode has a right) traverse currentright plus 1
      let left = traverseBinaryTree(node.left) + 1;
      let right = traverseBinaryTree(node.right) + 1;
      if (left + right > diameterLength) diameterLength = left + right;
      return left > right ? left : right;
    }
  }

  // return diameterLength;
  return diameterLength;
};
```
