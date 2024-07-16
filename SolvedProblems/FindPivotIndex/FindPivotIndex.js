const pivotIndex = (nums) => {
  const handleArraySum = (arr) => {
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  for (let idx = 0; idx < nums.length; idx++) {
    let leftArray = nums.slice(0, idx);
    let rightArray = nums.slice(idx + 1);

    if (handleArraySum(leftArray) === handleArraySum(rightArray)) {
      return idx;
    }
  }
  return -1;
};

pivotIndex([1, 7, 3, 6, 5, 6]); // 3
