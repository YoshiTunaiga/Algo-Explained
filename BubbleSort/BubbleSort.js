array = [8, 5, 2, 9, 5, 6, 3];

function bubbleSort(array) {
  // Loop through the array as long as the length of it;
  for (let i = 0; i < array.length; i++) {
    let swap = false; // Declare a Boolean to keep track of the swapped integers;

    // Loop through the array as pointers
    for (let j = 0; j < array.length; j++) {
      // If the 1st integer it's greater than the next integer
      if (array[j] > array[j + 1]) {
        // hold 1st integer to a temporary variable;
        let temp = array[j];

        //Swap the integers, one for the other...
        array[j] = array[j + 1];
        array[j + 1] = temp;

        // Turn swap to true, pointing that the integers have been swapped at this point.
        swap = true;
      }
    }
    // If there is no other integer to swap, break the cycle.
    if (!swap) break;
  }

  // return the now sorted array...
  return array;
}

bubbleSort(array);

/* SECOND BUBBLE SORT SOLUTION 

function bubbleSort(array) {
  while(array.length) {
		let swap = false;
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				swap = true;
			}
		}
		if(!swap) break;
	}
	return array;
}
*/
