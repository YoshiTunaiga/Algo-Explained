# Max Number of K-Sum Pairs

You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

## Samples:

```
Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.

```

## Solution One

```js
const maxOperations = function (nums, kSum) {
  nums.sort((a, b) => a - b);
  let opCount = 0,
    start = 0,
    end = nums.length - 1;

  while (start < end) {
    if (nums[start] + nums[end] === kSum) {
      opCount++;
      start++;
      end--;
      continue;
    } else if (nums[start] + nums[end] > kSum) {
      end--;
    } else {
      start++;
    }
  }

  return opCount;
};
```

## Solution Notes

```
const maxOperations = function(nums, kSum) {
    /**
    Input = array of integers
    Output = an integer

    variables:
        opCount
        p1, p2

    Approach:
     - Two pointers p1, p2
     */
    nums.sort((a,b) => a-b);
    let opCount = 0, p1 = 0, p2 = nums.length - 1;

        while(p1 < p2) {
            // let sumTotal = nums[p1] + nums[p2]
            if( nums[p1] + nums[p2] === kSum) {
               opCount++;
               p1++;
               p2--;
               continue;
            } else if (nums[p1] + nums[p2] > kSum) {
                p2--;
            } else {
                p1++;
            }
        }

    return opCount;
};
```
