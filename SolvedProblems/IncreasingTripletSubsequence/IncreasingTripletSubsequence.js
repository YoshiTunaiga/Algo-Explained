const increasingTriplet = (nums) => {
  if (nums.length < 3) return false;

  let iNum = Infinity;
  let jNum = Infinity;

  for (let kdx = 0; kdx < nums.length; kdx++) {
    if (iNum < jNum && jNum < nums[kdx]) {
      return true;
    }

    if (nums[kdx] > iNum) {
      jNum = nums[kdx];
    } else {
      iNum = nums[kdx];
    }
  }

  return false;
};
