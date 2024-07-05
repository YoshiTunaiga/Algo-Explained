# Insertion Sort

Write a function that takes in an array of integers and returns a sorted version of that array. Use the Insertion Sort algorithm to sort the array.

## Sample Input

```javascript
array = [8, 5, 2, 9, 5, 6, 3];
```

## Sample Output

```javascript
[2, 3, 5, 5, 6, 8, 9];
```

## Solution #1

```javascript
function insertionSort(array) {
  // as long as left side of the integer is greater than integer, swap;
  for (let j = 0; j < array.length; j++) {
    while (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
      j--;
    }
  }
  return array;
}
```
