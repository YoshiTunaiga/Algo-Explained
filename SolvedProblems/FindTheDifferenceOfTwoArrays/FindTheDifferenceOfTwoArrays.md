## Find the Difference of Two Arrays

Given two **0-indexed** integer arrays `nums1` and `nums2`, return _a list_ `answer` _of size_ `2` _where:_

- `answer[0]` _is a list of all_ **distinct** _integers in_ `nums1` _which are **not** present in_ `nums2`.\_
- `answer[1]` _is a list of all_ **distinct** _integers in_ `nums2` _which are **not** present in_ `nums1`.\_

**Note** that the integers in the lists may be returned in **any** order.

## Sample Input

```js
(nums1 = [1, 2, 3]), (nums2 = [2, 4, 6]);
```

## Sample Output

```js
[
  [1, 3],
  [4, 6],
];
```

## Solution #1

```js
const findDifference = (array1, array2) => {
  let diffArray1 = [];
  let diffArray2 = [];

  array1.forEach((num) => {
    if (!array2.includes(num) && !diffArray1.includes(num)) {
      diffArray1.push(num);
    }
  });
  array2.forEach((num) => {
    if (!array1.includes(num) && !diffArray2.includes(num)) {
      diffArray2.push(num);
    }
  });

  return [diffArray1, diffArray2];
};
// Runtime: 127ms
```

## Solution #2

```js
const findDifference = (nums1, nums2) => {
  const memo1 = [];
  const memo2 = [];

  for (let idx = 0; idx < nums1.length; idx++) {
    if (!nums2.includes(nums1[idx]) && !memo1.includes(nums1[idx]))
      memo1.push(nums1[idx]);
  }

  for (let idx = 0; idx < nums2.length; idx++) {
    if (!nums1.includes(nums2[idx]) && !memo2.includes(nums2[idx]))
      memo2.push(nums2[idx]);
  }

  return [memo1, memo2];
};
// Runtime: 126ms
```

### Notes

```js
const findDifference = (nums1, nums2) => {
  /**
        Input: arrays of integers
        Ouput: Arrays of arrays with integers
        Variables:
            - temp arrays

        Approach:
            - Hash Maps / set
            - Memo
            - Arrays


     */

  const memo1 = [];
  const memo2 = [];

  //  const memo1 = {};
  //  const memo2 = {};
  //  const length = nums1.length > nums2.length ? nums1.length : nums2.length;

  //  for(let idx = 0; idx < length; idx++) {
  //     if(nums1.length && !nums2.includes(nums1[idx]) && !memo1[nums1[idx]] && nums1[idx]) memo1[nums1[idx]] = nums1[idx];

  //     if(nums2.length && !nums1.includes(nums2[idx]) && !memo2[nums2[idx]] && nums2[idx]) memo2[nums2[idx]] = nums2[idx];
  //  }

  for (let idx = 0; idx < nums1.length; idx++) {
    if (!nums2.includes(nums1[idx]) && !memo1.includes(nums1[idx]))
      memo1.push(nums1[idx]);
  }

  for (let idx = 0; idx < nums2.length; idx++) {
    if (!nums1.includes(nums2[idx]) && !memo2.includes(nums2[idx]))
      memo2.push(nums2[idx]);
  }
  //  return [Object.values(memo1), Object.values(memo2)]
  return [memo1, memo2];
};
```
