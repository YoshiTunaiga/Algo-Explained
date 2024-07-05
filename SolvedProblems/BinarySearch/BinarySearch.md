# Binary Search

Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwis -1.

## Sample Input

```javascript
array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
target = 33;
```

## Sample Output

```javascript
3;
```

## Solution #1

AlgoExpert:

```javascript
function binarySearch(array, target) {
  // Loop through the array
  for (let i = 0; i < array.length; i++) {
    // For each num, check if it's equal to the target.
    if (array[i] === target) {
      //return its index
      return i;
    }
    // else, continue
  }

  // if no integer it's equal to the target, return -1
  return -1;
}

Time Complexity is `O(log(n))` time | Space Complexity `O(1)` - Where `n` is the length of the input array.
```

## Solution #2

LeetCode: Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, the return its index. Otherwise, return -1.

You must write an algorithm with `O(log n` runtime complexity.

Input: `nums = [-1, 0, 3, 5, 9, 12], target = 9;`

Output: `4`

Explanation: `9 exists in nums and its index is 4.`

```js
const search = (nums, target) => {
  let idx = 0;

  while (idx < nums.length) {
    if (nums[idx] === target) return idx;

    idx++;
  }
  return -1;
};
```
