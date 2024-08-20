# Count Good Nodes in Binary Tree

Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.

## Sample Input

```
Example 1:
Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.

Example 2:
Input: root = [3,3,null,4,2]
Output: 3
Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.

Example 3:
Input: root = [1]
Output: 1
Explanation: Root is considered as good.
```

## Solution 1

```js
const goodNodes = (root) => {
  if (!root.left && !root.right) return 1;

  let queue = [root];
  let maxQueue = [-Infinity];
  let count = 0;
  //    let max = 0;
  //    let goodNodes = [];
  //    let prevNode = 0;

  while (queue.length) {
    let currNode = queue.pop();
    let max = maxQueue.pop();
    // there is a diff max in every floor
    max = Math.max(currNode.val, max);

    if (max === currNode.val) count++;

    if (currNode.left) {
      queue.push(currNode.left);
      maxQueue.push(max);
    }

    if (currNode.right) {
      queue.push(currNode.right);
      maxQueue.push(max);
    }
    // if(currNode.val >= max) {
    //     console.log(currNode.val, currNode.left,prevNode)
    // if the currNode is greater or equal than the previous one
    //     if(currNode.val >= prevNode){
    //          goodNodes.push(currNode.val)
    //     };
    // }

    // prevNode = currNode.val
  }

  return count;
};
```

### Notes

```
Input: tree called root
    Ouput: # of good nodes (int)
    Variables:
        - queue
        - count of good nodes
    Edge Cases:
        - !root.left && !root.right return 1
        - node.val could be equal to previous node.val
    Approach:
        - post-order

    [3,1,4,3,null,1,5]
    root -> 1 good
    root -> 1 -> 3 good
    root -> 4 good
    root -> 4 -> 1 bad
    root -> 4 -> 5 good

    root: good
    3 > left or right:
        left 1 < 3: bad
        right 4 >= 3: good
    1 > left or right:
        left 3 >= 1: good
        right null: bad
    3 > left or right:
        null
    4 > left or right:
        left 1 < 4: bad
        right 5 >= 4: good
    output: 4

    pre-order: root, left, right
    in-order: left, root, right
    post-order: left, right, root

            9
              \
                3
               /
              6
```

## Solution 2

```js
const goodNodes = (root) => {
  if (!root.left && !root.right) return 1;

  let queue = [[root, -Infinity]];
  //  let maxQueue = [-Infinity]
  let count = 0;
  //    let max = 0;
  //    let goodNodes = [];
  //    let prevNode = 0;

  while (queue.length) {
    let [currNode, max] = queue.pop();
    // let max = maxQueue.pop()
    // there is a diff max in every floor
    max = Math.max(currNode.val, max);

    if (max === currNode.val) count++;

    if (currNode.left) queue.push([currNode.left, max]);

    if (currNode.right) queue.push([currNode.right, max]);

    // if(currNode.val >= max) {
    //     console.log(currNode.val, currNode.left,prevNode)
    // if the currNode is greater or equal than the previous one
    //     if(currNode.val >= prevNode){
    //          goodNodes.push(currNode.val)
    //     };
    // }

    // prevNode = currNode.val
  }

  return count;
};
```
