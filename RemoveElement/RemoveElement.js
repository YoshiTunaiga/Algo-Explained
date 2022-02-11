let nums = [3, 2, 2, 3];
let val = 3;

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

removeElement(nums, val);
