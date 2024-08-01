const deleteMiddle = (head) => {
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

deleteMiddle([1, 3, 4, 7, 1, 2, 6]); // [1,3,4,1,2,6]
