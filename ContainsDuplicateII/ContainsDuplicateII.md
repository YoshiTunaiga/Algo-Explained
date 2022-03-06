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

Leetcode: Using a Nested for loop approach

```js
const containsNearbyDuplicate = function (nums, k) {
  // Using a For nested Loop.

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // If the absolute value of i - j is less or equal to k, and integets at i and j are equal then its true;
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) return true;
    }
  }
  return false;
};
```

## Solution #2

Leetcode: Using a for loop approach

```js
const containsNearbyDuplicate = function (nums, k) {
  let hash = {};

  for (let idx = 0; idx < nums.length; idx++) {
    let num = nums[idx]; // Get currentInteger
    let diff = Math.abs(idx - hash[num]); // Get the absolute difference

    // If the difference is less or equal to (k) return true;
    if (diff <= k) return true;
    // else, add the currentInteger with its index to the hash object;
    else hash[num] = idx;
  }
  // return false;
  return false;
};
```

## Solution #3

Leetcode: Using Pointers/While loop approach

```js
const containsNearbyDuplicate = function (nums, k) {
  let hash = {},
    idx = 0;
  while (nums.length--) {
    let num = nums[idx]; // Get currentInteger
    let diff = Math.abs(idx - hash[num]); // Get the absolute difference

    // If the difference is less or equal to (k) return true;
    if (diff <= k) return true;
    // else, add the currentInteger with its index to the hash object;
    else {
      hash[num] = idx;
      idx++;
    }
  }
  // return false;
  return false;
};
```

## Solution #4

Leetcode: Using For In Loop, treating the array as an object.

```js
const containsNearbyDuplicate = function (nums, k) {
  let hash = {};
  for (let idx in nums) {
    let diff = Math.abs(idx - hash[nums[idx]]); // Get the absolute difference

    // If the difference is less or equal to (k) return true;
    if (diff <= k) return true;
    // else, add the currentInteger with its index to the hash object;
    else hash[nums[idx]] = idx;
  }
  // return false;
  return false;
};
```

## Solution #5

Leetcode: Using Set() as the most optimize approach [Set Object as a resource](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

```js
const containsNearbyDuplicate = function (nums, k) {
  // set a Set object to store unique values
  let hash = new Set();

  // Loop through the array nums
  for (let idx = 0; idx < nums.length; idx++) {
    // If the hash object has this currentInteger, return true;
    if (hash.has(nums[i])) return true;

    // if not, add currentInteger to the hash object
    hash.add(nums[i]);

    // If the size of the hash object is greater than (k), delete the integer at index - (k) position from hash object;
    if (hash.size > k) hash.delete(nums[i - k]);
  }

  // return false;
  return false;
};
```
