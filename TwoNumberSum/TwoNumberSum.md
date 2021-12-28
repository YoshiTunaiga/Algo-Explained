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

## SOLUTION #1

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

twoNumberSum();
```
