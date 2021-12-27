# Bubble Sort

Write a function that takes in an array of integers and returns a sorted version of that array. Use the Bubble Sort algorithm to sort the array.

## Sample Input

```
array = [8, 5, 2, 9, 5, 6, 3]
```

## Sample Output

```
[2, 3, 5, 5, 6, 8, 9]
```

## Solution #1

```
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
```

## Solution #2

```
function bubbleSort(array) {
  // As long as the length of the array
  while(array.length) {

		let swap = false; // Declare a boolean variable;

		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];

        // Swap integers, one for the other
				array[j] = array[j + 1];
				array[j + 1] = temp;

				swap = true; // turn swap to true
			}
		}

		if(!swap) break; // If no more integers to swap, break the cycle;
	}

	return array; // return the new sorted array
}
```
