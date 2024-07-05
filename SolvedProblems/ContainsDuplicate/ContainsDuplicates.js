let nums = [1, 2, 3, 1];

const containsDuplicate = function (nums) {
  let memo = {};

  nums.forEach((num) => {
    if (memo[num]) memo[num]++;
    else memo[num] = 1;
  });

  for (let num in memo) if (memo[num] > 1) return true;
  return false;
};

containsDuplicate(nums);
