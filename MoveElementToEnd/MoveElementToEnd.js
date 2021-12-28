array = [2, 1, 2, 2, 2, 3, 4, 2];
toMove = 2;

function moveElementToEnd(array, toMove) {
  let last = [];
  let first = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === toMove) last.push(array[i]);
    else first.push(array[i]);
  }

  array = first.concat(last);
  return array;
}

moveElementToEnd(array, toMove);
