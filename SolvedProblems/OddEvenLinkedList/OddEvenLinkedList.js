const oddEvenList = (head) => {
  if (!head || !head.next) return head;

  let oddList = head;
  let evenList = head.next;
  let evenHead = head.next;

  while (evenList && evenList.next) {
    oddList.next = oddList.next.next;

    evenList.next = evenList.next.next;

    oddList = oddList.next;
    evenList = evenList.next;
  }

  oddList.next = evenHead;
  return head;
};
