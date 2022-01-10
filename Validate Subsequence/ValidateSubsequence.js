let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

function isValidSubsequence(array, sequence) {
  let pointer = 0; // declare a pointer for our sequence array;

  // loop through the main array
  for (let i = 0; i < array.length; i++) {
    // if the current int on sequence array is equal to current in on main array
    if (sequence[pointer] === array[i]) {
      pointer++; // move the pointer one place
    }
  }

  // if the pointer total is equal to the sequence array's length, return true;
  return pointer === sequence.length ? true : false;
}

isValidSubsequence(array, sequence);
