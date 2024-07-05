function findClosestValueInBst(tree, target) {
  let queue = [tree]; // Declare a queue starting at the root;
  let values = []; // Declare an empty array that will hold the each node's value;

  // Let's traverse the tree by checking Root, Left then Right nodes: Pre-Order
  while (queue.length) {
    let currentNode = queue.shift();

    if (!values.includes(currentNode.value)) {
      values.push(currentNode.value);
    }
    if (currentNode.left && !values.includes(currentNode.left.value)) {
      queue.push(currentNode.left);
      values.push(currentNode.left.value);
    }
    if (currentNode.right && !values.includes(currentNode.right.value)) {
      queue.push(currentNode.right);
      values.push(currentNode.right.value);
    }
  }

  // If node's value is equal to the target, return node's value;
  if (values.includes(target)) return target;
  else {
    values.push(target);
    values.sort(function (a, b) {
      return a - b;
    });
    let targetIdx = values.indexOf(target);
    if (target - values[targetIdx - 1] < values[targetIdx + 1] - target) {
      // if (node's value is equal to the target - 1) return node's value;
      return values[targetIdx - 1];
    } else {
      // If (node's value is equal to the target + 1), return node's value;
      return values[targetIdx + 1];
    }
  }
}

findClosestValueInBst(tree, target);

let target = 12;
/*
let tree = {
  nodes: [
    { id: "10", left: "5", right: "15", value: 10 },
    { id: "15", left: "13", right: "22", value: 15 },
    { id: "22", left: null, right: null, value: 22 },
    { id: "13", left: null, right: "14", value: 13 },
    { id: "14", left: null, right: null, value: 14 },
    { id: "5", left: "2", right: "5-2", value: 5 },
    { id: "5-2", left: null, right: null, value: 5 },
    { id: "2", left: "1", right: null, value: 2 },
    { id: "1", left: null, right: null, value: 1 },
  ],
  root: "10",
};
*/
