# Validate Subsequence

Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren’t necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

## Sample Input

```js
array = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [1, 6, -1, 10];
```

## Sample Output

```js
true;
```

## Solution #1

```js
function isValidSubsequence(array, sequence) {
  let pointer = 0; // declare a pointer for our sequence array;

  // loop through the main array
  for (let i = 0; i < array.length; i++) {
    // if the current int on sequence array is equal to current in on main array
    if (sequence[pointer] === array[i]) {
      pointer++; // move the pointer one place
    }
  }

  // if the pointer total is equal to the sequence array's length, return true;
  return pointer === sequence.length ? true : false;
}

Time Complexity is O(n)
Space Complexity is O(1)
```
