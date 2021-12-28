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
```
