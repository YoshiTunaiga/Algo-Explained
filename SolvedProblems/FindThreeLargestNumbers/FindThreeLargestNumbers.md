# Find Three Largest Numbers

Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array.

The function should return duplicate integers if necessary; for example, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].

## Sample Input

```javascript
array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
```

## Sample Output

```javascript
[18, 141, 541];
```

## Solution #1

```javascript
function findThreeLargestNumbers(array) {
  let copy = array; //create a copy of the input array
  let length = copy.length;

  //Nesting Loop through the array
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1 + i; j < array.length; j++) {
      // temporary variable holding the integer index (i) on the array
      let temp = array[i];

      //If integer(i) its greater than integer(j)
      if (array[i] > array[j]) {
        //The lets swap one for the other.
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  // return the last three integers of the ascending order array
  return copy.slice(length - 3);
}
```
