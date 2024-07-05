# Increasing Triplet Subsequence

Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

# Sample

```
Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
```

# Solution One

```js
const increasingTriplet = (nums) => {
  if (nums.length < 3) return false;

  let iNum = Infinity;
  let jNum = Infinity;

  for (let kdx = 0; kdx < nums.length; kdx++) {
    if (iNum < jNum && jNum < nums[kdx]) {
      return true;
    }

    if (nums[kdx] > iNum) {
      jNum = nums[kdx];
    } else {
      iNum = nums[kdx];
    }
  }

  return false;
};
```

# Solution Notes

```
var increasingTriplet = function(nums) {
    /**
    Input: Array of integers
    Output: Boolean

    Variables:
        - Pointers
        - track of values

    Approach:
        - Sliding Window
        - Three Pointers
        - Two pointers

    Edge Cases:
        - Array is less then a triplet
     */

    /* Three Pointer Solution */
    if(nums.length < 3) return false;

    let iNum = Infinity;
    let jNum = Infinity;
    // if(iNum < jNum && jNum < nums[2]) return true;

    for(let kdx = 0; kdx < nums.length; kdx++) {

        if(iNum < jNum && jNum < nums[kdx]) {
            return true;
        }

        if(nums[kdx] > iNum) {
            jNum = nums[kdx]
        } else {
            iNum = nums[kdx]
        }

    }

    return false;
};
```
