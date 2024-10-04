# Maximum Level Sum of a Binary Tree

Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

## SAMPLE

```
Example 1:
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation:
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.

Example 2:
Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2

```

## My SOLUTION 1

```js
const maxLevelSum = function (root) {
  if (!root.left && !root.right) return 1;

  let memo = {};
  let queue = [{ curr: root, lvl: 1 }];

  while (queue.length) {
    let currNode = queue.pop();

    // root
    if (!memo[currNode.lvl]) {
      memo[currNode.lvl] = currNode.curr.val;
    } else {
      memo[currNode.lvl] += currNode.curr.val;
    }

    // left
    if (currNode.curr.left) {
      queue.push({ curr: currNode.curr.left, lvl: currNode.lvl + 1 });
    }

    // right
    if (currNode.curr.right) {
      queue.push({ curr: currNode.curr.right, lvl: currNode.lvl + 1 });
    }
  }

  let maxSum = Math.max(...Object.values(memo));
  let index = Object.values(memo).indexOf(maxSum);

  return Number(Object.keys(memo)[index]);
};
```

### MY SOLUTION 1 NOTES

```
 /**
  Input: binary tree
    [1,7,0,7,-8,null,null]
  Output: level integer
  2

  Variables:
  level = null
  maximalSum = 0;

  Edge Cases:
  - no levels above 1
  - no root


  Approach:
      memoLvls = {1, 2, 3}
      queue = [root, lvl 1]

      Loop:
      if (root.left)
        memo[lvl]+= root.left.val
      - push to the queue + lvl

      if(root.right)
          memo[lvl]+= root.right.val
      - push to the queue + lvl

      get the values of the memoObj for MaxSum
      get the index of the maxSum value
      get the
  return level
*/
```
