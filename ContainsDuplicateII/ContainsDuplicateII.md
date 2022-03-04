# Containes Duplicate II

## Prompt

Given an integer array nums and an integer k, return true if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

## Sample Input

```js
(nums = [1, 2, 3, 1]), (k = 3);

(nums = [1, 2, 3, 1, 2, 3]), (k = 2);
```

## Sample Output

```js
True;

False;
```

## Solution #1

```js
const containsNearbyDuplicate = function (nums, k) {
  // Using a For nested Loop.

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // If the absolute value of i - j is less or equal to k, and integets at i and j are equal then its true;
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
};
```

## Solution #2

```js
const containsNearbyDuplicate = function (nums, k) {
  let hash = {};

  for (let idx = 0; idx < nums.length; idx++) {
    let num = nums[idx];
    let diff = Math.abs(idx - hash[num]);
    if (diff <= k) return true;
    else {
      hash[num] = idx;
    }
  }
  return false;
};
```

Eventhough this can be done using using [Set Object as a resource](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) it's preferable to just take the memo approach.
