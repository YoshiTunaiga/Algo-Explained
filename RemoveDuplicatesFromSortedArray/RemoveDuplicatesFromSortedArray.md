# Remove Duplicates from Sorted Array

## Prompt

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

## Sample Input

```
Input: nums = [1,1,2]

```

## Sample Output

```
Output: 2, nums = [1,2,_]

Explanation: The function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

## Solution #1

```js
const removeDuplicates = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (i + 1 < array.length && array[i] === array[i + 1]) {
      array.splice(i, 1);
      i--;
    }
  }
  return array.length;
};
```

## Solution #2

```js
const removeDuplicates = function (array) {
  if (!array.length) return 0;
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
};
```

## Solution #3

```js
const removeDuplicates = function (array) {
  if (!array.length) return 0;
  let i = 0;
  let j = 1;

  while (j < array.length) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
    j++;
  }
  return i + 1;
};
```

Time O(n^2) for splice and Time O(n) for pointers
