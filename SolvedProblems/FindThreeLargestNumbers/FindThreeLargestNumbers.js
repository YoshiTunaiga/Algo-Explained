array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

function findThreeLargestNumbers(array) {
  let copy = array; //create a copy of the input array
  let length = copy.length;

  //Nesting Loop through the array
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1 + i; j < array.length; j++) {
      // temporary variable holding the integer index (i) on the array
      let temp = array[i];

      //If integer(i) its greater than integer(j)
      if (array[i] > array[j]) {
        //The lets swap one for the other.
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  // return the last three integers of the ascending order array
  return copy.slice(length - 3);
}

findThreeLargestNumbers(array);
