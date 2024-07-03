function maxSubarraySum(array, num) {
  if (array.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;

  for (let i = num; i <= array.length - 1; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
