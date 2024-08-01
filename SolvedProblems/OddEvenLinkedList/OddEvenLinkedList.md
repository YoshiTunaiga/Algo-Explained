# Odd Even Linked List

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

## Sample Input

```
Example 1:

Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

Example 2:

Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
```

## SOLUTION 1

```js
const oddEvenList = (head) => {
  /**
        Input: linked list
        Output: linked list
        Variables: 
            - evenList
            - prevNode
        Approach:
            - Math.abs(nodeIdx) % 2 === 0
            - or create multiple lists
        Edge Cases:
            - empty head
            - first next is null
     */

  // head is null or there is no next
  if (!head || !head.next) return head;

  // [1, 2, 3, 4, 5]
  let oddList = head;
  let evenList = head.next;
  let evenHead = head.next;

  while (evenList && evenList.next) {
    oddList.next = oddList.next.next;
    // console.log(oddList)
    evenList.next = evenList.next.next;
    // console.log("evenList", evenList)
    oddList = oddList.next;
    evenList = evenList.next;
  }

  // console.log(oddList)
  // console.log("evenList", evenList)
  // console.log("evenHead", evenHead)
  // console.log("head", head)
  oddList.next = evenHead;
  return head;
};
```
