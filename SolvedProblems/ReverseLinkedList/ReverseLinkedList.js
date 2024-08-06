const reverseList = function (head) {
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
};

reverseList([1, 2, 3, 4, 5]); // [5,4,3,2,1]
