# Search Insert Position

## Prompt

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `o(log n)` runtime complexity.

## Sample Input

```
1) nums = [1, 3, 5, 6], target = 5;

2) nums = [1, 3, 5, 6], target = 2;
```

## Sample Output

```
1) 2   // index of (5) is 2

2) 1   // index where (2) can be inserted is 1.
```

## Solution #1

LeetCode Binary Search algorithm example:

```js
const searchInsert = function(nums, target) {
  let finalIdx = 0;
  if (target < nums[0]) return 0;

  while(finalIdx < nums.length) {
    // if the integer equals the target, return the index;
    if(nums[finalIdx] === target) return finalIdx;

    // else if the integer can be between currentInt and nextInt, return nextInt index;
    if(nums[finalIdx] < target && target < nums[finalIdx + 1]) return finalIdx + 1;

    // else continue;
    finalIdx++;
  }

  return finalIdx;
}


Time Complexity is o(log n) and Space Complexity is O(1);
```
