def pivotIndex(nums):
        rightSum = 0

        for int in nums:
            rightSum =  rightSum + int
        
        leftSum = 0
        idx = 0

        while idx < len(nums):
            rightSum = rightSum - nums[idx]

           
            if rightSum == leftSum:
                return idx

            leftSum = leftSum + nums[idx]
            idx = idx + 1
        
        return -1

pivotIndex([1, 7, 3, 6, 5, 6])

# For this problem, while loop had to be used in order to avoid the value errors from using nums.index(int);