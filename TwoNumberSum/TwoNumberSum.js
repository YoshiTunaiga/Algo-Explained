array = [3, 5, -4, 8, 11, 1, -1, 6];
targetSum = 10;

function twoNumberSum(array, targetSum) {
  let result = []; // declaring a result array of the numbers that will be returned.

  // [i = 0, j = i + 1]
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // If the pair of integers add up to the targetSum
      if (array[i] + array[j] === targetSum) {
        //Then will push both integers to the result array.
        result.push(array[i]);
        result.push(array[j]);
      }
      // Else, continue checking.
    }
  }
  //Then return result.
  return result;
}

twoNumberSum(array, targetSum);
