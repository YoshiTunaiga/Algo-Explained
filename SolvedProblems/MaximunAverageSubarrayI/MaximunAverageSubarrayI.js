const findMaxAverage = (nums, k) => {
  if (nums.length <= 1) {
    return nums[0];
  }

  let sum = 0;
  let maxAv = 0;
  let idx = 0;

  while (idx < k) {
    sum += nums[idx];
    idx++;
  }
  maxAv = sum / k;

  for (let rightIdx = 0; rightIdx < nums.length - k; rightIdx++) {
    sum = sum - nums[rightIdx] + nums[idx];
    let tempMaxAv = sum / k;
    maxAv = tempMaxAv > maxAv ? tempMaxAv : maxAv;
    idx++;
  }
  return maxAv;
};
