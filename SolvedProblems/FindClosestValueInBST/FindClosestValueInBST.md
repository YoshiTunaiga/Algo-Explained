# Find Closest Value In BST

Write a function that takes in a **Binary Search Tree (BST)** and a target integer value and returns the closest value to that target value contained in the BST.

Can be assume that there will only be one closest value.

Each **BST** node has an integer **value**, a **left** child node, and a **right** child node. A node is said to be a valid **BST** node if and only if it satifies the BST property: its **value** is strictly greater than the values of every node to its left; its **value** is less than or equal to the values of every node to its right; and its children nodes are either valid **BST** nodes themselves or **None**/ **null**.

## Sample Input

```js
tree =    10
        /    \
       5      15
      / \    /  \
     2   5  13   22
    /         \
   1          14

target = 12;
```

## Sample Output

```js
13;
```

## Solution #1

```js
function findClosestValueInBst(tree, target) {
  let queue = [tree]; // Declare a queue starting at the root;
  let values = []; // Declare an empty array that will hold the each node's value;

  // Let's traverse the tree by checking Root, Left then Right nodes: Pre-Order
  while (queue.length) {
    let currentNode = queue.shift();

    if (!values.includes(currentNode.value)) {
      values.push(currentNode.value);
    }
    if (currentNode.left && !values.includes(currentNode.left.value)) {
      queue.push(currentNode.left);
      values.push(currentNode.left.value);
    }
    if (currentNode.right && !values.includes(currentNode.right.value)) {
      queue.push(currentNode.right);
      values.push(currentNode.right.value);
    }
  }

  // If node's value is equal to the target, return node's value;
  if (values.includes(target)) return target;
  else {
    values.push(target);
    values.sort(function (a, b) {
      return a - b;
    });
    let targetIdx = values.indexOf(target);
    if (target - values[targetIdx - 1] < values[targetIdx + 1] - target) {
      // if (node's value is equal to the target - 1) return node's value;
      return values[targetIdx - 1];
    } else {
      // If (node's value is equal to the target + 1), return node's value;
      return values[targetIdx + 1];
    }
  }
}
```
