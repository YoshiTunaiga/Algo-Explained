# Two Sum II - Input Array Is Sorted

## Prompt

Given a **`1-indexed`** array of integers numbers that is already **_`sorted in non-decreasing order`_**, find two numbers such that they add up to a specific target number. Let these two numbers be **numbers[index1]** and **numbers[index2]** where **1 <= index1 < index2 <= numbers.length.**

Return _the indices of the two numbers_, **index1** and **index2**, **_`added by one`_** as an _integer array_ **[index1, index2]** of _length 2_.

The tests are generated such that there is **`exactly one solution`**. You **`may not`** use the same element twice.

Your solution must use only constant extra space.

## Sample Input

```js
(numbers = [2, 7, 11, 15]), (target = 9);
```

## Sample Output

```js
[1, 2];
Explanation: `The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2];`;
```

## Solution #1

LeetCode:

```js
const twoSum = (nums, target) => {
  let idx = 0,
    jidx = nums.length - 1;

  while (idx <= jidx) {
    let sum = nums[idx] + nums[jidx];

    if (sum === target) return [idx + 1, jidx + 1];
    else if (sum > target) jidx--;
    else {
      idx++;
    }
  }
};
```
