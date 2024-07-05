let nums = [1, 3, 5, 6],
  target = 5;

const searchInsert = function (nums, target) {
  let finalIdx = 0;
  if (target < nums[0]) return 0;

  while (finalIdx < nums.length) {
    // if the integer equals the target, return the index;
    if (nums[finalIdx] === target) return finalIdx;

    // else if the integer can be between currentInt and nextInt, return nextInt index;
    if (nums[finalIdx] < target && target < nums[finalIdx + 1])
      return finalIdx + 1;

    // else continue;
    finalIdx++;
  }

  return finalIdx;
};

searchInsert(nums, target);
