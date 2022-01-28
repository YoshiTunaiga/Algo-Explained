## Merge Sorted Array

You are given two integer arrays **_nums1_** and **_nums2_**, sorted in **non-decreasing order**, and two integers **_m_** and **_n_**, representing the number of elements in **_nums1_** and **_nums2_** respectively.

Merge **_nums1_** and **_nums2_** into a single array sorted in **non-decreasing order.**

The final sorted array should not be returned by the function, but instead be stored inside the array **_nums1_**. To accommodate this, **_nums1_** has a length of **m + n\***, where the first **_m_** elements denote the elements that should be merged, and the last **\*n\*\*** elements are set to **0** and should be ignored. **_nums2_** has a length of **_n_**.

## Sample Input

```js
(nums1 = [1, 2, 3, 0, 0, 0]), (m = 3);
(nums2 = [2, 5, 6]), (n = 3);
```

## Sample Output

```js
[1, 2, 2, 3, 5, 6];
```

## Solution #1

```js
const merge = function (nums1, m, nums2, n) {
  // two integers m and n,
  //representing the number of elements in nums1 and nums2 respectively.
  let p1 = m + n;

  // while n > 0 && p1 > 0 going down;
  while (n && p1--) {
    // if, starting from last, num from list1 >= list2
    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[p1] = nums1[--m];
    } else {
      nums1[p1] = nums2[--n];
    }
  }
};
```

Time Complexity of **O(n)**, Space Complexity of **O(1)**;
