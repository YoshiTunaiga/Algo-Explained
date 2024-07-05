# Move Element To End

You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

The function should perform this in place (it should mutate the input array) and doesn't need to maintain the order of the other integers.

## Sample Input

```javascript
array = [2, 1, 2, 2, 2, 3, 4, 2];
toMove = 2;
```

## Sample Output

```javascript
[1, 3, 4, 2, 2, 2, 2, 2];
```

## Solution #1

```javascript
function moveElementToEnd(array, toMove) {
  let last = [];
  let first = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === toMove) last.push(array[i]);
    else first.push(array[i]);
  }

  array = first.concat(last);
  return array;
}
```
