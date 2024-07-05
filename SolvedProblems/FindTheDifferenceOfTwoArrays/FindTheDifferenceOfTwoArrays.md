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
