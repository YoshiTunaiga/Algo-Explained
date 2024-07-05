let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

const rotate = (nums, k) => {
  if (nums.length < k) k = k % nums.length;

  let rotators = nums.splice(nums.length - k, nums.length);

  nums.unshift(...rotators);
};
