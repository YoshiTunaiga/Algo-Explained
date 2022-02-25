let array = [7, 6, 4, -1, 1, 2];
let targetSum = 16;

function fourNumberSum(nums, targetSum) {
  let results = [],
    i = 0;

  while (i < nums.length - 3) {
    for (let a = i + 1; a < nums.length - 2; a++) {
      for (let b = a + 1; b < nums.length - 1; b++) {
        for (let c = b + 1; c < nums.length; c++) {
          if (nums[i] + nums[a] + nums[b] + nums[c] === targetSum)
            results.push([nums[i], nums[a], nums[b], nums[c]]);
        }
      }
    }
    i++;
  }

  return results;
}

fourNumberSum(nums, targetSum);
