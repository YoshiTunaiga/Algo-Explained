# Invert Binary Tree

Given the **root** of a binary tree, invert the tree, and return _*its root*_.

Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.

Each **BinaryTree** node has an integer **value**, **left** child node, and a **right** child node. Children nodes can either be **BinaryTree** nodes themselves or **None**/ **null**.

## Example

```js
tree =     1       =====>>     tree =    1
        /     \                       /     \
      2        3                     3       2
    /   \     /  \                 /   \    /  \
   4     5   6     7              7    6   5    4
  /  \                                         /  \
 8    9                                       9    8

```

## Sample Input

```js
root = [4, 2, 7, 1, 3, 6, 9];
```

## Sample Output

```js
[4, 7, 2, 9, 6, 3, 1];
```

## Solution #1

```js
function invertBinaryTree(tree) {
  let queue = [tree]; // set up a queue

  while (queue.length) {
    let currentNode = queue.shift(); // get the currentNode as long as there's something on the queue.

    // Swap left with right, right with left;
    let temp = currentNode.left;
    currentNode.left = currentNode.right;
    currentNode.right = temp;

    // if there is a right or left, push them to the queue.
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return tree; // return tree;
}
```
