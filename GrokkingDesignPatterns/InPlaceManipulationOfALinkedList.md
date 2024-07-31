# In Place Manipulation of a Linked List

## Summary of Reverse Linked List

Given the head of a singly linked list, reverse the linked list and return its updated head.

### MY SOLUTION

```js
export function reverse(head) {
  let prev = null;
  let next = null;
  let curr = head;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
  return head;
}
```

### GROKKING SOLUTION

```js
function reverse(head) {
  let prev = null;
  let next = null;
  let curr = head;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  head = prev;
  return head;
}
```

To reverse the linked list, we will follow these steps:

Initialize three pointers: prev, next, and curr. The prev and next pointers are initialized as NULL, while the curr pointer is initialized to the head of the linked list.

Iterate over the linked list. While iterating, perform the following steps:

Before changing the next of curr, store the next node using the following line of code next = curr.next.
Now, we will update the next pointer of curr with the prev pointer. This will reverse the pointer of the current node from forward to backward, eventually aiding the reversal of the linked list.
After reversing the pointer, we’ll update prev as curr and curr as next using prev = curr and curr = next respectively.
After reversing the whole linked list, we’ll change the head pointer to the prev pointer because prev will be pointing to the new head node.
