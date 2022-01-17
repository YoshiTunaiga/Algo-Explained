class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

removeDuplicatesFromLinkedList(linkedList);

/*
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
*/
