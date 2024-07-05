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

## Solution #2

MasterClass - Udemy `Sliding Window`

Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of _consecutive_ elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

```js
maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null
```

```js
function maxSubarraySum(array, num) {
  if (array.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;

  for (let i = num; i <= array.length - 1; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```
