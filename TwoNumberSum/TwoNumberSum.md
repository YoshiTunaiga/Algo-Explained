# Two Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

## Sample Input

```javascript
array = [3, 5, -4, 8, 11, 1, -1, 6];
targetSum = 10;
```

## Sample Output

```javascript
[-1, 11];
```

## SOLUTION #1 - RETURNING THE INTEGERS

```javascript
function twoNumberSum(array, targetSum) {
  let result = []; // declaring a result array of the numbers that will be returned.

  // [i = 0, j = i + 1]
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // If the pair of integers add up to the targetSum
      if (array[i] + array[j] === targetSum) {
        //Then will push both integers to the result array.
        result.push(array[i]);
        result.push(array[j]);
      }
      // Else, continue checking.
    }
  }
  //Then return result.
  return result;
}
```

## SOLUTION #2 - RETURNING INDICES

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

```js
const twoSum = function (nums, target) {
  let result = [];

  // Nested loop for adding (2) integers
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // Sum both integers
      let sum = nums[i] + nums[j];
      if (sum === target) {
        // If the sum is equal to the target
        // Push first integer index, then push the second integer index.
        result.push(i);
        result.push(j);
      }
    }
  }
  // return result array with the indeces, if any.
  return result;
};
```
