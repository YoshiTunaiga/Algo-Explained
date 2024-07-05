# Rotate Array

## Prompt

Given an array, rotate the array to the right by `k` steps, where `k` is non-negative.

## Sample Input

```
nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
```

## Sample Output

```
[5, 6, 7, 1, 2, 3, 4]
Explanation:
rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6];
rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5];
rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4];
```

## Solution #1

Leetcode:

```js
const rotate = (nums, k) => {
  if (nums.length < k) k = k % nums.length;

  let rotators = nums.splice(nums.length - k, nums.length);

  nums.unshift(...rotators);
};
```
