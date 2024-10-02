# Binary Tree Right Side View

Given the `root` of a binary tree, imagine yourself standing on the right side of it, return _the values of the nodes you can see ordered from top to bottom._

## Samples

```
Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:
Input: root = [1,null,3]
Output: [1,3]

Example 3:
Input: root = []
Output: []
```

# Solution 1

```js
const rightSideView = function (root) {
  if (!root) return [];

  let outputList = [root.val];
  let currQueue = [{ curr: root, level: 0 }];

  while (currQueue.length) {
    let currNode = currQueue.pop();

    if (currNode.curr.left) {
      currQueue.push({ curr: currNode.curr.left, level: currNode.level + 1 });
    }
    if (currNode.curr.right) {
      currQueue.push({ curr: currNode.curr.right, level: currNode.level + 1 });
    }

    if (outputList[currNode.level] === undefined) {
      outputList.push(currNode.curr.val);
    }
  }

  return outputList;
};
```

### Solution 1 Notes (PseudoCode)

```
Input: binary tree

Output: List of nodes [{},{}]

Variable:
    let outputList = []
Edge Cases:
    - root is null
    - root has no other nodes
Approach:
    - check for null roots and return empty list
    - create variable for outputList with root in it
    - create a queue with root
    - while there is something in the queue,
        - create an array of nodes with left and right and push it to the queue for every depth

       Level 1: [2, 3]
       Level 2: [5, 4]
       List = [[2, 3], [5, 4]]

       if currentPair[1] outputlist.push(currentPair[1].value)
       else if(currentPair[0]) outputlist.push(currentPair[0].value)

        Note from Kade:
        queue = [{curr: node, level: currentDepth}]

    Once that is done
    - return outputList
```
