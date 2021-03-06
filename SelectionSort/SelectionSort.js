array = [8, 5, 2, 9, 5, 6, 3];

function selectionSort(array) {
  // Nested loop through the array starting at index 0
  for (let i = 0; i < array.length - 1; i++) {
    // Loop through the array starting at index 0 + 1
    for (let j = 0 + i; j < array.length; j++) {
      // If the 1st integer its greater than the 2nd integer
      if (array[i] > array[j]) {
        // Hold 1st integer on a Temporary variable
        let temp = array[i];
        // Make 1st integer equal to the 2nd integer
        array[i] = array[j];
        // Make 2nd integer equal to the temporary integer
        array[j] = temp;
      }
    }
  }
  // Once loop is done, return the array.
  return array;
}

selectionSort(array);
