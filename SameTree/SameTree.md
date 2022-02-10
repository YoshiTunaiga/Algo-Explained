# Same Tree

## Prompt

Given the roots of two binary trees **root** and **copy**, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

## Sample Input

```js
root =      1            copy =   1
           /  \                  /  \
          2    3                2    3


root = [1, 2, 3]        copy = [1, 2, 3]
```

## Sample Output

```js
true; // it was verified that both root and copy are the same;
```

## Solution #1

```js
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
```
