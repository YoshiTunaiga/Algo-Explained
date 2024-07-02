const productExceptSelf = function (nums) {
  let resultArray = [];
  let prodL = 1;
  let prodR = 1;

  for (let leftIdx = 0; leftIdx < nums.length; leftIdx++) {
    resultArray[leftIdx] = prodL;
    prodL *= nums[leftIdx];
  }

  for (let rightIdx = nums.length - 1; rightIdx >= 0; rightIdx--) {
    resultArray[rightIdx] *= prodR;
    prodR *= nums[rightIdx];
  }

  return resultArray;
};

productExceptSelf([1, 2, 3, 4]);
