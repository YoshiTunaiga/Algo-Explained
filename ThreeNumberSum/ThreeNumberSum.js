array = [12, 3, 1, 2, -6, 5, -8, 6];
targetSum = 0;

function threeNumberSum(array, targetSum) {
  let result = []; // Declare an empty array;

  array.sort((a, b) => a - b); // sort in ascending order

  for (let i = 0; i < array.length - 2; i++) {
    // Declare pointers for left and right;
    let left = i + 1;
    let right = array.length - 1;

    // As long as the right is greater than left...
    while (left < right) {
      //Let's calculate the integer and it's left and right...
      let currentSum = array[left] + array[right] + array[i];

      // If currentSum is equal to the targetSum
      if (currentSum === targetSum) {
        // Then, let's push the root, left and right integers
        result.push([array[i], array[left], array[right]]);
        // Move pointers
        left++;
        right--;
      } else if (currentSum < targetSum) left++;
      else if (currentSum > targetSum) right--;
    }
  }

  return result;
}

threeNumberSum(array, targetSum);
