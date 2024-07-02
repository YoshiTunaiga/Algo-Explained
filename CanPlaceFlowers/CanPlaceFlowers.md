# Can Place Flowers

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in **adjacent** plots.

Given an integer array `flowerbed` containing `0`'s and `1`'s, where `0` means empty and `1` means not empty, and an integer `n`, return `true` if `n` new flowers can be planted in the `flowerbed` without violating the no-adjacent-flowers rule and `false` otherwise.

# Sample One

```js
Input: (flowerbed = [1, 0, 0, 0, 1]), (n = 1);
Output: true;

Input: (flowerbed = [1, 0, 0, 0, 1]), (n = 2);
Output: false;
```

# Solution One

```js
const canPlaceFlowers = function (flowerbed, newFlowersCount) {
  for (let idx = 0; idx < flowerbed.length; idx++) {
    if (
      !flowerbed[idx - 1] &&
      !flowerbed[idx + 1] &&
      !flowerbed[idx] &&
      newFlowersCount
    ) {
      flowerbed[idx] = 1;
      newFlowersCount--;
    }
  }

  return !n;
};
```

# Solution Two

More descriptive and easy to understand solution:

```js
const canPlaceFlowers = function (flowerbed, newFlowersCount) {
  for (let idx = 0; idx < flowerbed.length; idx++) {
    let currentFlower = flowerbed[idx];
    let prevFlower = flowerbed[idx - 1];
    let nextFlower = flowerbed[idx + 1];

    if (!prevFlower && !nextFlower && !currentFlower && newFlowersCount) {
      currentFlower = 1;
      newFlowersCount--;
    }
  }

  return !newFlowersCount;
};
```

# Solution Notes

Input = Array, int
OUtput = boolean

Variables:
// - Left and right flowers

Approach: 1. Loop thru the array 2. if the curent is one, continue 3. if the current is zero, add one of n by replacing 0 to 1
a. As long as current.next and current.next.next is zero, continue
b. else return false 4. if loop ends and n still > 0, return false

Edge Cases:

- array length is less than n
- empty arrays
- Array length is one.
