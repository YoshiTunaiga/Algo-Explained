let numbers = [2, 7, 11, 15],
  target = 9;

const twoSum = (nums, target) => {
  let idx = 0,
    jidx = nums.length - 1;

  while (idx <= jidx) {
    let sum = nums[idx] + nums[jidx];

    if (sum === target) return [idx + 1, jidx + 1];
    else if (sum > target) jidx--;
    else {
      idx++;
    }
  }
};

twoSum(numbers, target);
