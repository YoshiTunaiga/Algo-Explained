# Breadth-first Search

## Prompt

You're given a **Node** class that has a **name** and an array of optional **children** nodes. When put together, nodes form acyclic tree-like structure.

Implementing the **breadthFirstSearch** method on the **Node** class, which takes in an empty array, traverses the tree using the Breadth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.

## Sample Input

```js
graph =   A
        / | \
      B   C   D
    /  \     /  \
   E    F   G    H
       / \   \
      I   J   K

graph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
```

## Sample Output

```js
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
```

## Solution #1

```js
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
```

**Time Complexity:** O(v + e) | **Space Complexity:** O(v) - where **v** is the number of **_vertices_** of the input graph and **e** is the number of **_edges_** of the input graph.
