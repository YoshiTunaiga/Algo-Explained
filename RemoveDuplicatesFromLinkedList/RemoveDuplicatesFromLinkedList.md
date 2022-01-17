# Remove Duplicates From Linked List

You're given the head of a Sungly Linked List whose nodes are in sorted order with respect to their values. Write a function that returns a modified version of the Linked List that doesn't contain any nodes with duplicate values. The Linked List should be modified in place (i.e., you shouldn't create a brand new list), and the modified Linked List should still have its nodes sorted with respect to their values.

Each **LinkedList** node has an integer **value** as well as a **next** node pointing to the next node in the list or to **None** / **null** if it's the tail of the list.

## Sample Input

```js
linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6

{
  "linkedList": {
    "head": "1",
    "nodes": [
      {"id": "1", "next": "1-2", "value": 1},
      {"id": "1-2", "next": "1-3", "value": 1},
      {"id": "1-3", "next": "2", "value": 1},
      {"id": "2", "next": "3", "value": 3},
      {"id": "3", "next": "3-2", "value": 4},
      {"id": "3-2", "next": "3-3", "value": 4},
      {"id": "3-3", "next": "4", "value": 4},
      {"id": "4", "next": "5", "value": 5},
      {"id": "5", "next": "5-2", "value": 6},
      {"id": "5-2", "next": null, "value": 6}
    ]
  }
}
```

## Sample Output

```js
result = 1 -> 3 -> 4 -> 5 -> 6

{
  "head": "1",
  "nodes": [
    {"id": "1", "next": "3", "value": 1},
    {"id": "3", "next": "4", "value": 3},
    {"id": "4", "next": "5", "value": 4},
    {"id": "5", "next": "6", "value": 5},
    {"id": "6", "next": null, "value": 6}
  ]
}

```

## Solution #1

```js
function removeDuplicatesFromLinkedList(linkedList) {
  // define a variable with current Linked List
  let currentNode = linkedList;
  // while currentNode is not equal to null
  while (currentNode !== null) {
    // let currentNode's next equal to currentNode.next
    let nextNode = currentNode.next;
    // while currentNode's next is not equal to null AND currentNode.value is equal to currentNode's next
    while (nextNode !== null && nextNode.value === currentNode.value) {
      // currentNode's next be equal to currentNode's next's next;
      nextNode = nextNode.next;
    }
    // currentNode's next equal to next node;
    currentNode.next = nextNode;
    // currentNode equal to next node;
    currentNode = nextNode;
  }
  // return linkedList;
  return linkedList;
}


Time complexity is O(n) | Space complexity is O(1)
```
