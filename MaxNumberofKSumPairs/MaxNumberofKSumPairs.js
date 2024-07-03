const maxOperations = function (nums, kSum) {
  nums.sort((a, b) => a - b);
  let opCount = 0,
    start = 0,
    end = nums.length - 1;

  while (start < end) {
    if (nums[start] + nums[end] === kSum) {
      opCount++;
      start++;
      end--;
      continue;
    } else if (nums[start] + nums[end] > kSum) {
      end--;
    } else {
      start++;
    }
  }

  return opCount;
};
