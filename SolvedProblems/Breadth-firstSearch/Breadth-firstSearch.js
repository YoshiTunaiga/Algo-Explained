class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // Floor by Floor approach
  breadthFirstSearch(array) {
    // Start a queue.
    let queue = [this];
    //While there is something in the queue
    while (queue.length) {
      // Get the currentNode FIFO out of queue.
      let currentNode = queue.shift();
      // if there are childrens in this node.
      if (currentNode.children)
        // for each child, push them to the queue
        currentNode.children.forEach((child) => queue.push(child));
      // Then push currentNode's name to the array
      array.push(currentNode.name);
    }
    // return array at the end of iterations.
    return array;
  }
}
