array = [8, 5, 2, 9, 5, 6, 3];

function insertionSort(array) {
  // as long as left side of the integer is greater than integer, swap;
  for (let j = 0; j < array.length; j++) {
    while (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
      j--;
    }
  }
  return array;
}

insertionSort(array);
