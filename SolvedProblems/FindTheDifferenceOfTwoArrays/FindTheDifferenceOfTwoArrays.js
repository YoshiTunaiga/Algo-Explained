const findDifference = (array1, array2) => {
  let diffArray1 = [];
  let diffArray2 = [];

  array1.forEach((num) => {
    if (!array2.includes(num) && !diffArray1.includes(num)) {
      diffArray1.push(num);
    }
  });
  array2.forEach((num) => {
    if (!array1.includes(num) && !diffArray2.includes(num)) {
      diffArray2.push(num);
    }
  });

  return [diffArray1, diffArray2];
};
