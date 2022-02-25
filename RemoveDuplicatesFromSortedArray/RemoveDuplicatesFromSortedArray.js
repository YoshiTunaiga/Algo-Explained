let nums = [1, 1, 2];

const removeDuplicates = function (array) {
  if (!array.length) return 0;
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
};

removeDuplicates(nums);
