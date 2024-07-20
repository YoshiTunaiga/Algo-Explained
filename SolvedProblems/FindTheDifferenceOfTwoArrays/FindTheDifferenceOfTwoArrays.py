def findDifference(nums1, nums2):
        diffSet1 = {nums1[0]}
        diffSet2 = {nums2[0]}

        for num in nums1:
            diffSet1.add(num)

        for num in nums2:
            diffSet2.add(num)

        return [diffSet1.difference(diffSet2), diffSet2.difference(diffSet1)]

# FIND DIFFERENCE SLOW SOLUTION:

# def findDifference(nums1, nums2):
#        diffArray1 = []
#        diffArray2 = []

#        for num in nums1:
#         if num not in nums2 and num not in diffArray1:
#             diffArray1.append(num)
        
#        for num in nums2:
#         if num not in nums1 and num not in diffArray2:
#             diffArray2.append(num)

#        return [diffArray1, diffArray2]