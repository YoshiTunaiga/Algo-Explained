# Find Pivot Index

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

## Samples

```
Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
```

## Solution 1 - Lazy Solution

```js
const pivotIndex = (nums) => {
  const handleArraySum = (arr) => {
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  for (let idx = 0; idx < nums.length; idx++) {
    let leftArray = nums.slice(0, idx);
    let rightArray = nums.slice(idx + 1);

    if (handleArraySum(leftArray) === handleArraySum(rightArray)) {
      return idx;
    }
  }
  return -1;
};
```

### Time Complexity

O(N) with a running time of 691ms due to the helper methods utilized within.

- The helper function uses reduces as a type of for loop
- For loop through the original array

### Space Complexity

O(1)

- Creation of new arrays using slice

### Solution Notes

```js
const pivotIndex = (nums) => {
  /*
        Input: [...integers]
        Output: The index of the int used for pivot
        Variables: 
            - Left Sum
            - Right Sum
            - Pivot Index
        Approach:
            - Loop through each idx
            [1, 7, 3, 6, 5, 6]
             0, 1, 2, 3, 4, 5
            - on each idx, apply reduce (sum) to all the numbers on the left and same to all the rights.
            - if the sum of the left is equal to the right, return the idx
            - else return -1
     */
  const handleArraySum = (arr) => {
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  for (let idx = 0; idx < nums.length; idx++) {
    // console.log("idx: ", idx)

    let leftArray = nums.slice(0, idx);
    let rightArray = nums.slice(idx + 1);

    // console.log("lArr", leftArray)
    // console.log("rArr", rightArray)

    // let leftSum = handleArraySum(leftArray);
    // let rightSum = handleArraySum(rightArray);
    // console.log("lSum", leftSum)
    // console.log("rSum", rightSum)

    if (handleArraySum(leftArray) === handleArraySum(rightArray)) {
      return idx;
    }
  }
  return -1;
};
```

## Solution 2 - Thought through Solution

```js
const pivotIndex = (nums) => {
  let rightSum = 0;

  // Total sum of all numbers
  for (let idx = 0; idx < nums.length; idx++) {
    rightSum += nums[idx];
  }

  let leftSum = 0; // start a left sum to compare to.

  for (let idx = 0; idx < nums.length; idx++) {
    // as you move forward, balance the array by substracting from the right
    rightSum -= nums[idx];

    // if the pivot index is met, return
    if (leftSum === rightSum) {
      return idx;
    }

    // Add to the left
    leftSum += nums[idx];
  }

  // in the case that no pivot index was met, return -1 (0 does not count as wrong)
  return -1;
};
```
