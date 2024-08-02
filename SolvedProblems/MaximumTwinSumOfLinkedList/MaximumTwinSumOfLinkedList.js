const pairSum = (head) => {
  let result = [];

  // get the length of the linked list
  let listLength = 0;
  let currNode = head;
  while (currNode !== null) {
    listLength++;
    currNode = currNode.next;
  }

  let curr = head;
  let listArr = [];
  while (curr !== null) {
    listArr.push(curr.val);
    curr = curr.next;
  }

  let end = listArr.length - 1;
  for (let start = 0; start < listArr.length; start++) {
    result.push(listArr[start] + listArr[end]);
    end--;
  }

  return Math.max(...result);
};
