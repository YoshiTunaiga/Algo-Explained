# Merge Two Sorted Lists

You are given the heads of two sorted linked lists **list1** and **list2**.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return **_the head of the merged linked list._**

## Sample Input:

```js
list1 = [1, 2, 4];
list2 = [1, 3, 4];
```

## Sample Output:

```js
linkedList = [1, 1, 2, 3, 4, 4];
```

## Solution #1:

```js
const mergeTwoLists = function (list1, list2) {
  let head = new ListNode();
  let tail = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  tail.next = list1 === null ? list2 : list1;
  return head.next;
};
```
