let nums = [1, 2, 3, 1];
let k = 3;

const containsNearbyDuplicate = function (nums, k) {
  // Add 2 pointers of (i, j)
  // If the absolute value of i - j is less or equal to k, and integets at i and j are equal then its true;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
};
