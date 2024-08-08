# Leaf-Similar Trees

Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

## Sample Input

```
Example 1:

Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true

Example 2:

Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false
```

## Solution 1

Using Arrays comparison

```js
const traverseInOrder = (root) => {
  if (!root) {
    return;
  }

  let queue = [root];
  let arrayOfLeafs = [];

  while (queue.length) {
    // temp
    let currentNode = queue.pop();

    if (!currentNode.left && !currentNode.right) {
      arrayOfLeafs.push(currentNode.val);
    } else {
      // do something
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  // [6, 7, 4, 9, 8] root1
  // [6, 7, 4, 9, 8] root2
  return arrayOfLeafs;
};

const leafSimilar = (root1, root2) => {
  let root1Array = traverseInOrder(root1);
  let root2Array = traverseInOrder(root2);

  if (root1Array.length !== root2Array.length) {
    return false;
  }

  for (let idx = 0; idx < root1Array.length; idx++) {
    if (root1Array[idx] !== root2Array[idx]) {
      return false;
    }
  }

  return true;
};
```

### Solution Notes

```
 /**
  LeafSimilarTrees
        Depth-first -> Left to right -> Inorder traverse

        return true if the end of each leaf is the same for both roots

        Input:
        - (2) roots (val, left, right)
        Output:
        - Boolean -> true if similar

        Variables:
        - sequence of vals
        - queue

        Edge Cases:
            What is range in a tree?
            - One tree might not have
            - If both roots have only 1 node, then return true if both roots are the same val
            - nodes on the same position at the end of the leaf


        Approach:
        - Return true;
        - Do we have a root that is null? if so, return bool

        - Queue: Floors
            [3], [5,1], [6, 2, 9, 8],

        - Note:
            - keep track of each node that does not have a left or right
            - push the node to a define variable

        - helper function that traverses the trees one by one
        - returns an array of last values of each leaf
            []
        - Compares if any difference (MEMORY)
            - Set1(first root values)
            - Set2(second root values)
            - set1.difference(set2)

        5
        /\
     [ 6]    2
    /. \
  null null

    recursively later @kade
     */
```

## Solution 2

Using strings comparison

```js
const traverseInOrder = (root) => {
  if (!root) {
    return;
  }

  let queue = [root];
  let arrayOfLeafs = "";

  while (queue.length) {
    // temp
    let currentNode = queue.pop();

    if (!currentNode.left && !currentNode.right) {
      arrayOfLeafs += currentNode.val;
    } else {
      // do something
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
  // 89476
  // 89476
  return arrayOfLeafs;
};

const leafSimilar = (root1, root2) => {
  return traverseInOrder(root1) === traverseInOrder(root2);
};
```
