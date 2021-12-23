array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
target = 33;

function binarySearch(array, target) {
  // Loop through the array
  for (let i = 0; i < array.length; i++) {
    // For each num, check if it's equal to the target.
    if (array[i] === target) {
      //return its index
      return i;
    }
    // else, continue
  }

  // if no integer it's equal to the target, return -1
  return -1;
}
