## Unique Number Of Occurrences

Given an array of integers `arr`, return `true` _if the number of occurrences of each value in the array is **unique** or_ `false` _otherwise._

## Sample Input

```js
arr = [1, 2, 2, 1, 1, 3];
```

## Sample Output

```js
boolean = true;
```

## Solution 1

Notes:

```
  Variables:
  1. boolean to return
  2. memo for counting
  3. memo's values

  Approach:
```

Solution:

```js
const uniqueOccurrences = (arr) => {
  let bool = true;
  let memoArr = {};

  arr.forEach((num) => {
    if (!memoArr[num]) {
      memoArr[num] = 1;
    }
    memoArr[num]++;
  });

  let values = Object.values(memoArr);
  let idx = values.length;

  while (idx > 0) {
    let queue = values.pop();
    if (values.includes(queue)) {
      return false;
    }
    idx--;
  }

  return bool;
};
```

## Solution 2

```js
var uniqueOccurrences = function (arr) {
  /*
        Input: array of integers
        Output: boolean
        Variable: 
            - uniqueMap
            - bool

        Approach: 
            - create a map from each int count
            - loop through the map values
            
     */

  const uniqueMap = new Map();
  let bool = true;

  arr.forEach((int) =>
    uniqueMap.set(int, uniqueMap.get(int) ? uniqueMap.get(int) + 1 : 1)
  );

  const occurMap = new Map();

  uniqueMap.forEach((value, key, map) => {
    if (occurMap.has(value)) {
      bool = false;
    } else {
      occurMap.set(value, key);
    }
  });

  return bool;
};
```
