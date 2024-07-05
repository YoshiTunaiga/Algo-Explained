# Three Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets.
The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an empty array.

## Sample Input

```javascript
array = [12, 3, 1, 2, -6, 5, -8, 6];
targetSum = 0;
```

## Sample Output

```javascript
[
  [-8, 2, 6],
  [-8, 3, 5],
  [-6, 1, 5],
];
```

## Solution #1

```javascript
function threeNumberSum(array, targetSum) {
  let result = []; // Declare an empty array;

  array.sort((a, b) => a - b); // sort in ascending order

  for (let i = 0; i < array.length - 2; i++) {
    // Declare pointers for left and right;
    let left = i + 1;
    let right = array.length - 1;

    // As long as the right is greater than left...
    while (left < right) {
      //Let's calculate the integer and it's left and right...
      let currentSum = array[left] + array[right] + array[i];

      // If currentSum is equal to the targetSum
      if (currentSum === targetSum) {
        // Then, let's push the root, left and right integers
        result.push([array[i], array[left], array[right]]);
        // Move pointers
        left++;
        right--;
      } else if (currentSum < targetSum) left++;
      else if (currentSum > targetSum) right--;
    }
  }

  return result;
}
```
