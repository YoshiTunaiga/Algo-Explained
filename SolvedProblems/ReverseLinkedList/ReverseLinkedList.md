# Reverse Linked List

Given the `head` of a singly linked list, reverse the list, and return the _reversed list._

## Sample Input

```
Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []
```

## Solution 1

```js
const reverseList = function (head) {
  let prev;
  let next;
  let curr = head;

  while (curr !== null) {
    next = curr.next; // set the temp next

    // work on the swap
    curr.next = prev;
    prev = curr;

    // move forward
    curr = next;
  }

  return prev;
};
```
