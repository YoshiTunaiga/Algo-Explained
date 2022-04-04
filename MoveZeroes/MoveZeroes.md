# Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

## Sample Input

```js
nums = [0, 1, 0, 3, 12];
```

## Sample Output

```js
[1, 3, 12, 0, 0];
```

## Solution #1

```js
const moveZeroes = function (nums) {
  let left = 0; // Declare pointers to check against each other

  for (let right = 0; right < nums.length; right++) {
    // If the rigth integer is not equal to (0) && the left integer IS EQUAL to (0)
    if (nums[right] !== 0 && nums[left] === 0) {
      // Swap the integers, one for the other
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
    }
    // However, if left integer it's not equal to (0), then move left pointer (1) index
    if (nums[left] !== 0) left++;
  }
  return nums;
};


Time Complexity is O(n)
Space Complexity is O(1)
```

## Solution #2

```js
const moveZeroes = function (nums) {
  let idx = 0, jidx = 0; // Declare pointers to check against each other

  while (jidx < nums.length) {
    // If the rigth integer is not equal to (0) && the left integer IS EQUAL to (0)
    if (nums[jidx] !== 0 && nums[idx] === 0) {
      // Swap the integers, one for the other
      let temp = nums[idx];
      nums[idx] = nums[jidx];
      nums[jidx] = temp;
    }
    jidx++;

    if (nums[idx] !== 0) idx++;
  }
  return nums;
};


Time Complexity is O(n)
Space Complexity is O(1)
```
