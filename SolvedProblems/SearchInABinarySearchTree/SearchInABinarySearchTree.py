def searchBST(root, val):
        queue = [root]
        res = None

        while (len(queue)):
            curr = queue.pop()

            if(curr.val == val):
                res = curr

            if(curr.left):
                queue.append(curr.left)
            if(curr.right):
                queue.append(curr.right)
        return res