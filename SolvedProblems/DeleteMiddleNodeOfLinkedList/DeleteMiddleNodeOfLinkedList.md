# Delete the Middle Node of a Linked List

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

# Sample Input

```
Example 1:
Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node.

Example 2:
Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.

Example 3:
Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1.
```

## Solution 1

```js
const deleteMiddle = (head) => {
  /**
        Input: linked list
        Output: linked list

        Variables:
            - counter for list size
            - middlePoint for counter / 2
            - currentNode
            - prevNode

        Approach:
            - [1,3,4,7,1,2,6] len of 7
            - middle point => 7 / 2
            - loop thru the list
                - for each node, decrement the counter
                node idx | counter
                0 6
                1 5
                2 4
            - while counter !== middlePoint
                - move to next and decrement
                - prevNode = curr
            - prevNode.next = curr.next

        Edge Case:
            - linked list of 1 node
            - linked list of 2 nodes

     */

  if (!head.next) {
    head = null;
    return head;
  }

  let counter = 0;
  let currNode = head;
  let prevNode = null;

  while (currNode !== null) {
    counter++;
    currNode = currNode.next;
  }

  let newCurrNode = head;
  let nodeIdx = 0;

  while (nodeIdx !== Math.floor(counter / 2) && newCurrNode !== null) {
    prevNode = newCurrNode;
    newCurrNode = newCurrNode.next;
    nodeIdx++;
  }
  prevNode.next = newCurrNode.next;

  return head;
};
```
