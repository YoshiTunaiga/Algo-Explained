def longestOnes(nums, k):
       startP = 0
       endP = 0
       zeroesCount = k

       while endP < len(nums):
            if nums[endP] == 0:
                zeroesCount-=1
            
            if zeroesCount < 0:
                if nums[startP] == 0:
                    zeroesCount+= 1
                startP+=1

            endP+=1

       return endP - startP

longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)