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
  // Loop thru the array...
  for (let i = 0; i < array.length; i++) {
    // if the nextNum is not the last or undefined && both nums are equal
    if (i + 1 < array.length && array[i] === array[i + 1]) {
      // remove the currentNum
      array.splice(i, 1);
      // move i a step back
      i--;
    }
  }
  //return array's length
  return array.length;
};
```

```
This will make Time Complexity O(n^2) and Space Complexity O(1)
```

## Solution #2

```js
const removeDuplicates = function (array) {
  // if array's length is falsey return 0;
  if (!array.length) return 0;

  let i = 0; // Pointer for currentNum

  // Loop thru the array for the nextNum
  for (let j = 1; j < array.length; j++) {
    // if currentNum is not equal to the nextNum
    if (array[i] !== array[j]) {
      // Let currentNum move 1 position forward
      i++;
      // swap the currentNum with next num
      array[i] = array[j];
    }
  }
  // return the index + 1 => k
  return i + 1;
};
```

```
This will make Time Complexity O(n) without altering the array or create side effects and Space Complexity O(1)
```

## Solution #3

```js
const removeDuplicates = function (array) {
  // if array's length is falsey return 0
  if (!array.length) return 0;

  // Define pointers for currentNum and nextNum
  let i = 0,
    j = 1;

  // while j pointer is less than the array's length
  while (j < array.length) {
    // if currentNum is not equal to nextNum
    if (array[i] !== array[j]) {
      // Let currentNum move 1 position forward
      i++;
      // swap the currentNum with next num
      array[i] = array[j];
    }
    // Let nextNum move 1 position forward
    j++;
  }
  // return the index + 1 => k
  return i + 1;
};
```

```
This will make Time Complexity O(n) without altering the array or create side effects and Space Complexity O(1)
```
