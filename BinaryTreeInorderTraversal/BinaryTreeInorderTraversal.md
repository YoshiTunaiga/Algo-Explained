# Binary Tree Inorder Traversal

## Prompt

Given the **root** of a binary tree, return the **_inorder traversal of its nodes' values._**

## Sample Input

```js
tree =   1
          \
           2
          /
         3

root = [1, null, 2, 3]
```

## Sample Output

```js
[1, 3, 2];
```

## Solution #1

```js
const inorderTraversal = function (root, result = []) {
  if (!root) return result; // if it's null, return empty array.

  if (root.left) result = inorderTraversal(root.left, result); // if there's a left, callback the function on the left.

  result.push(root.val); // Push the val to the result's array.

  if (root.right) result = inorderTraversal(root.right, result); // if there's a right, callback the function on the right.

  return result; // return result;
};
```
