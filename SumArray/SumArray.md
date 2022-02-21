# Simple Array Sum

## Prompt

Given an array of integers, find the sum of its elements.

For example, if the array array = [1, 2, 3], 1 + 2 + 3 = 6, so return 6.

## Sample Input

```js
let array = [1, 2, 3];
```

## Sample Output

```js
6; // 1 + 2 + 3 = 6
```

## Solution #1

```js
function simpleArraySum(array) {
  let sum = 0;
  array.forEach((num) => (sum += num));
  return sum;
}
```
