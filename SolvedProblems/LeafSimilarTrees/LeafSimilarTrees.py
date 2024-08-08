def traverseInOrder(root):
    if(root is None):
        return

    queue = [root]
    stringOfLeafs = ''

    while(len(queue)):
        currentNode = queue.pop()

        if(currentNode.left is None and currentNode.right is None):
            stringOfLeafs = stringOfLeafs + repr(currentNode.val)
        else:
            if(currentNode.left):
                queue.append(currentNode.left)

            if(currentNode.right):
                queue.append(currentNode.right)
    return stringOfLeafs
        

def leafSimilar(root1, root2):
        return traverseInOrder(root1) == traverseInOrder(root2)