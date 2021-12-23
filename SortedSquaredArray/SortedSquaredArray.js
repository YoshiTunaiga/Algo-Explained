array = [1, 2, 3, 4, 6, 8, 9];

function sortedSquaredArray(array) {
  let result = []; // declaring a new empty array that will hold the result

  let squared = 0; // squared variable holds the number already squared.

  //Loop through the array
  for (let i = 0; i < array.length; i++) {
    //For each number in the array called "num"
    let num = array[i];
    // We want squared to be equal to the num times itself
    squared = num * num;
    // Push the squared num to the result
    result.push(squared);
    // Then make squared go back to zero.
    squared = 0;
  }
  // In the edge cases where the numbers can be even and negative, we want to sort in ascending order.
  result.sort(function (a, b) {
    return a - b;
  });

  return result;
}
