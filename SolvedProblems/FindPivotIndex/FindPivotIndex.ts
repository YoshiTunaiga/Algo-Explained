function pivotIndex(nums: number[]): number {
  let rightSum: number = 0;
  let leftSum: number = 0;

  for (let idx: number = 0; idx < nums.length; idx++) {
    rightSum += nums[idx];
  }

  for (let idx: number = 0; idx < nums.length; idx++) {
    rightSum -= nums[idx];

    if (leftSum === rightSum) {
      return idx;
    }

    leftSum += nums[idx];
  }

  return -1;
}

pivotIndex([1, 7, 3, 6, 5, 6]);
