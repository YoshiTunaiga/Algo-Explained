let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

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
