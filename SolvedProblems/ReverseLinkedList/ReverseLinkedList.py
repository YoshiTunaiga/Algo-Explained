def reverseList(self, head):
        prev = None
        next_head = None
        curr = head

        while curr != None:
            next_head = curr.next
            curr.next = prev
            prev = curr
            curr = next_head

        head = prev
        return head

# Input: head = [1,2,3,4,5]
# Output: [5,4,3,2,1]