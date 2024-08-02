# Maximum Twin Sum of a Linked List

In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.

# Sample Input

```
Example 1:

Input: head = [5,4,2,1]
Output: 6
Explanation:
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6.

Example 2:

Input: head = [4,2,2,3]
Output: 7
Explanation:
The nodes with twins present in this linked list are:
- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
Thus, the maximum twin sum of the linked list is max(7, 4) = 7.

Example 3:

Input: head = [1,100000]
Output: 100001
Explanation:
There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.

```

## Solution 1

```js
const pairSum = (head) => {
  let result = [];

  // get the length of the linked list
  let listLength = 0;
  let currNode = head;
  while (currNode !== null) {
    listLength++;
    currNode = currNode.next;
  }

  let node = head;
  let idx = 0;
  let leftArr = [];
  let rightArr = [];

  // if less than half of length: push to left
  // else push to right
  while (node !== null) {
    if (idx < listLength / 2) {
      leftArr.push(node.val);
    } else {
      rightArr.push(node.val);
    }
    node = node.next;
    idx++;
  }

  let jdx = leftArr.length - 1;
  for (let idx = 0; idx < rightArr.length; idx++) {
    result.push(rightArr[idx] + leftArr[jdx]);
    jdx--;
  }

  return Math.max(...result);
};
```

## Solution 2

### Notes

```
  MaximumTwinSumOfLinkedList
  Input: Linked list [5, 4, 2, 1]
  Output: Integer 6
  Variables:
      - Length
      - result
      - Math.max(( 5 + 1 ), ( 4 + 2 ))
  Edge Cases:
  Approach:
      - return the sum of the pairs using start and end towards the middle
      -
```

```js
const pairSum = (head) => {
  let result = [];

  // get the length of the linked list
  let listLength = 0;
  let currNode = head;
  while (currNode !== null) {
    listLength++;
    currNode = currNode.next;
  }

  let curr = head;
  let listArr = [];
  while (curr !== null) {
    listArr.push(curr.val);
    curr = curr.next;
  }

  let end = listArr.length - 1;
  for (let start = 0; start < listArr.length; start++) {
    result.push(listArr[start] + listArr[end]);
    end--;
  }

  return Math.max(...result);
};
```
