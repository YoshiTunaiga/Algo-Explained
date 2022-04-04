# Maximum Subarray

## Prompt

Given an integer array **`nums`**, find the contiguous subarray (containing at least one number) which has the largest sum and return its _sum_.

A **`subarray`** is a **`contiguous`** part of an array.

## Sample Input

```
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
```

## Sample Output

```
6    // [4, -1, 2, 1] has the largest sum = 6;
```

## Solution #1

```js
const maxSubArray = (nums) => {
  let result = -Infinity;
  let currentSum = 0;
  let idx = 0;

  while (idx < nums.length) {
    currentSum += nums[idx];

    if (currentSum > result) result = currentSum;

    if (currentSum < 0) currentSum = 0;

    idx++;
  }

  return result;
};

// Runtime: 72ms;
```
