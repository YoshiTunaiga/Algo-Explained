# Depth-first Search

You're given Node class that has a name and an array of optional children nodes. When put together, nodes form an acyclic tree-like structure.

Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.

If you're unfamiliar with Depth-first Search, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.

## Sample Input

```javascript
graph = A
      / |  \
     B  C   D
    / \    / \
   E   F  G   H
      / \  \
     I   J  K
```

## Sample Output

```javascript
["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"];
```

## Solution

```javascript
  depthFirstSearch(array) {
    let node = this;

    array.push(node.name); // root....

    // If the node has childs,
    if (node.children) {

      //For each child lets traverse with depthFirstSearch.
      node.children.map((child) => child.depthFirstSearch(array));
    }
    //else, continue or return array.
    return array;
  }
}
```
