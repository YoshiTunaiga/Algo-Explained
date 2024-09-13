class Solution(object):
    def longestZigZag(self, root):
        if(root == None):
            return 0
        if(root.left == None and root.right == None):
            return 0
        
        # global max variable
        maxOutput =[0] # List[] allows for modification in nested functions

        # Helper Pre-order function
        def preorderTraverse(node, output, path):
            if(node == None):
                return 0

            # No need to use 'global' when using list[]
            maxOutput[0] = max(maxOutput[0], output)

            if(node.left and path == False):
                preorderTraverse(node.left, output + 1, True)
            else:
                preorderTraverse(node.left, 1, True)

            if(node.right and path):
                preorderTraverse(node.right, output + 1, False)
            else:
                preorderTraverse(node.right, 1, False)

        # Left Node
        if(root.left):
            preorderTraverse(root.left, 1, True)

        # Right Node
        if(root.right):
            preorderTraverse(root.right, 1, False)
    
        # Return
        return maxOutput[0]