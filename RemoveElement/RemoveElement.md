# Remove Element

## Prompt

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do **not** allocate extra space for another array. You must do this b**y modifying the input array** in-place with O(1) extra memory.

**Custom Judge:**

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.

// It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be **accepted**.

## Sample Input

```js
let nums = [3, 2, 2, 3];
let val = 3;
```

## Sample Output

```js
[2, 2];
```

## Solution #1

```js
const removeElement = function (nums, val) {
  // Let's track K elements idx.
  let k = 0;

  // Loop through nums array
  for (let i = 0; i < nums.length; i++) {
    // if the val is not equal to the current num
    if (nums[i] !== val) {
      // integers at position nums[k] make it equal to the nums[i];
      nums[k] = nums[i];
      // add 1 to k (count)
      k++;
    }
  }
  // return k as the count;
  return k;
};
```

## Solution #2

```js
const removeElement = function (nums, val) {
  if (nums.length < 1) return 0;
  let i = 0; // pointer

  // Loop through nums array
  for (let j = 0; j < nums.length; j++) {
    // if the val is not equal to the current num
    if (nums[j] !== val) {
      // Swap
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
  }
  // return i as the count;
  return i;
};
```
