# Average Pair

## Prompt

Write a function called **averagePair**. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

## Sample Input

```js
(arr = [1, 2, 3]), (target = 2.5);

(arr = [-1, 0, 3, 4, 5, 6]), (target = 4.1);

(arr = []), (target = 4);
```

## Sample Output

```js
// true

// false

// false
```

## Solution #1

```js
function averagePair(arr, target) {
  let left = 0,
    right = arr.length - 1;

  if (arr.length < 2) return false;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;

    if (avg === target) return true;
    if (avg < target) left++;
    if (avg > target) right--;
  }

  return false;
}
```
