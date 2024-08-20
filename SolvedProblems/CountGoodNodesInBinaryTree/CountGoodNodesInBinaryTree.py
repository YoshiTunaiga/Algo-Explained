def goodNodes( root):
    queue = [root]
    maxQueue = [-float("inf")]
    count = 0

    while (len(queue)):
      currNode = queue.pop()
      currMax = maxQueue.pop()

      currMax = max(currNode.val, currMax)

      if (currMax == currNode.val):
          count = count + 1

      if (currNode.left):
          queue.append(currNode.left)
          maxQueue.append(currMax)

      if (currNode.right):
          queue.append(currNode.right)
          maxQueue.append(currMax)


    return count
        