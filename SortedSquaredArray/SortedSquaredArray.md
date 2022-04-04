# Sorted Squared Array

Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

## Sample Input

```javascript
array = [1, 2, 3, 4, 6, 8, 9];
```

## Sample Output

```javascript
[1, 4, 9, 25, 36, 64, 81];
```

## Solition #1

AlgoExpert

```javascript
function sortedSquaredArray(array) {
  let result = []; // declaring a new empty array that will hold the result

  let squared = 0; // squared variable holds the number already squared.

  //Loop through the array
  for (let i = 0; i < array.length; i++) {
    //For each number in the array called "num"
    let num = array[i];
    // We want squared to be equal to the num times itself
    squared = num * num;
    // Push the squared num to the result
    result.push(squared);
    // Then make squared go back to zero.
    squared = 0;
  }
  // In the edge cases where the numbers can be even and negative,
    we want to sort in ascending order.
  result.sort(function (a, b) {
    return a - b;
  });

  return result;
}
```

## Solution #2

LeetCode:
Given an integer array `nums` sorted in **`non-decreasing`** order, return an array of **`the squares of each number`** sorted in _non-decreasing order._

**Input:** `nums = [-4, -1, 0, 3, 10]`;

**Ouput:** `[0, 1, 9, 16, 100]`;

**Explanation**: After squaring, the array becomes `[16, 1, 0, 9, 100]`;
After sorting, it becomes `[0, 1, 9, 16, 100]`;

```js
const sortedSquares = (nums) => {
  // Loop through the nums array
  for (let idx in nums) {
    // square each integer
    nums[idx] = nums[idx] * nums[idx];
  }
  // return sorted nums array.
  return nums.sort((a, b) => a - b);
};
```
