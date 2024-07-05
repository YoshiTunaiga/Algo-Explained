const uniqueOccurrences = (arr) => {
  let bool = true;
  let memoArr = {};

  arr.forEach((num) => {
    if (!memoArr[num]) {
      memoArr[num] = 1;
    }
    memoArr[num]++;
  });

  let values = Object.values(memoArr);
  let idx = values.length;

  while (idx > 0) {
    let queue = values.pop();
    if (values.includes(queue)) {
      return false;
    }
    idx--;
  }

  return bool;
};
