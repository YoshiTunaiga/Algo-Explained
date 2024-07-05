def increasingTriplet(nums):
  if len(nums) < 3:
      return False
  
  iNum = float("inf")
  jNum = float("inf")

  for currentNum in nums:
      if iNum < jNum and jNum < currentNum:
          return True
      
      if currentNum > iNum:
          jNum = currentNum
      else:
          iNum = currentNum
  
  return False

increasingTriplet([1,2,3,4,5])