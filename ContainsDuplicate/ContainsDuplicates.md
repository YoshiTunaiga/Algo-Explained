# Contains Duplicate

## Prompt

Given an integer array **nums**, return **true** if any value appears **_at least twice_** in the array, and return **false** if every element is distinct.

## Sample Input

```
nums = [1,2,3,1]
```

## Sample Output

```
true
```

## Solution #1

```js
const containsDuplicate = function (nums) {
  // create a memo/dictionary
  let memo = {};

  // For each integer in the array, add the integer to the memo with value of (1) or plus (1) if already exist.
  nums.forEach((num) => {
    if (memo[num]) memo[num]++;
    else memo[num] = 1;
  });

  // For every key in the memo, if their value is greater than 1, return true;
  for (let num in memo) if (memo[num] > 1) return true;

  // else, return false;
  return false;
};
```
