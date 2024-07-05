# Pairs with Specific Difference

## Prompt

Given an array **arr** of distinct integers and a nonnegative integer **k**, write a function **findPairsWithGivenDifference** that returns an array of all pairs **[x,y]** in **arr**, such that **x - y = k**. If no such pairs exist, return an empty array.

**Note**: the order of the pairs in the output array should maintain the order of the y element in the original array.

## Sample Input:

```
arr = [0, -1, -2, 2, 1],
k = 1

```

## Sample Output:

```
[[1, 0], [0, -1], [-1, -2], [2, 1]]
```

## Solution #1

```js
function findPairsWithGivenDifference(arr, k) {
  let pairsResult = []; // empty array for storage
  let memo = {}; // memoization which will add space complexity

  // Loop thru the array and add every result from integer minus "k" equal to the integer itself;
  for (let i = 0; i < arr.length; i++) memo[arr[i] - k] = arr[i];

  // then for each num in the array, check for any num in the memo that is not undefined, and push both [keys and values] to the result
  arr.forEach((num) => {
    if (memo[num] !== undefined) pairsResult.push([memo[num], num]);
  });

  // if the array's length is less than 1, return empty array or the result of pairs;
  return arr.length < 1 ? arr : pairsResult;
}
```
