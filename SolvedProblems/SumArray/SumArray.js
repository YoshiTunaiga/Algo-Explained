let array = [1, 2, 3];

function simpleArraySum(array) {
  let sum = 0;
  array.forEach((num) => (sum += num));
  return sum;
}

simpleArraySum(array);
