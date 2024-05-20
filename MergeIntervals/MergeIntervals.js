const merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const newArray = [];
  for (let i = 0; i < intervals.length; i++) {
    const start = 0;
    const end = 1;
    const currentInt = intervals[i];
    const lastVisitedInt = newArray[newArray.length - 1];

    if (newArray.length === 0 || lastVisitedInt[end] < currentInt[start]) {
      newArray.push(currentInt);
    } else if (currentInt[end] > lastVisitedInt[end]) {
      lastVisitedInt[end] = currentInt[end];
    }
  }

  return newArray;
};
