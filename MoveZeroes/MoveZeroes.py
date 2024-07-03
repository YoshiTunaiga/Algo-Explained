def moveZeroes(self, nums):
        right = 0
        left = 0
        while right < len(nums):
            if nums[right] != 0 and nums[left] == 0:
                temp = nums[left]
                nums[left] = nums[right]
                nums[right] = temp
            if nums[left] != 0: 
                print(left + 1)
                left = left + 1
            print(right + 1)
            right = right + 1
        return nums