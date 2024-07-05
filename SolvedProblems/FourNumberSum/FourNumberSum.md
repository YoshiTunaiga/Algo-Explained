# Four Number Sum

## Prompt

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all quadruplets in the array that sum up to the target and return a two-dimensional array of all these quadruplets in no particular order.

If no four numbers sum up to the target sum, the function should return an empty array.

## Sample Input:

```
array = [7, 6, 4, -1, 1, 2];
targetSum = 16
```

## Sample Output:

```
[
  [7, 6, 4, -1],
  [7, 6, 1, 2]
]
```

## Solution #1:

```js
function fourNumberSum(nums, targetSum) {
  let results = [],
    i = 0;

  while (i < nums.length - 3) {
    for (let a = i + 1; a < nums.length - 2; a++) {
      for (let b = a + 1; b < nums.length - 1; b++) {
        for (let c = b + 1; c < nums.length; c++) {
          if (nums[i] + nums[a] + nums[b] + nums[c] === targetSum)
            results.push([nums[i], nums[a], nums[b], nums[c]]);
        }
      }
    }
    i++;
  }

  return results;
}
```
