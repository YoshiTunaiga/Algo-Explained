# Maximum Average Subarray I

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

## Samples:

```
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Input: nums = [5], k = 1
Output: 5.00000
```

## Solution One

```js
const findMaxAverage = (nums, k) => {
  if (nums.length <= 1) {
    return nums[0];
  }

  let sum = 0;
  let maxAv = 0;
  let idx = 0;

  while (idx < k) {
    sum += nums[idx];
    idx++;
  }
  maxAv = sum / k;

  for (let rightIdx = 0; rightIdx < nums.length - k; rightIdx++) {
    sum = sum - nums[rightIdx] + nums[idx];
    let tempMaxAv = sum / k;
    maxAv = tempMaxAv > maxAv ? tempMaxAv : maxAv;
    idx++;
  }
  return maxAv;
};
```
