nums = [0, 1, 0, 3, 12];

const moveZeroes = function (nums) {
  let left = 0; // Declare pointers to check against each other

  for (let right = 0; right < nums.length; right++) {
    // If the rigth integer is not equal to (0) && the left integer IS EQUAL to (0)
    if (nums[right] !== 0 && nums[left] === 0) {
      // Swap the integers, one for the other
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
    }
    // However, if left integer it's not equal to (0), then move left pointer (1) index
    if (nums[left] !== 0) left++;
  }
  return nums;
};

moveZeroes(nums);
