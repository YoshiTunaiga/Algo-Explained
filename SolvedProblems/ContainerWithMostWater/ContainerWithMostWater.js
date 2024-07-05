const maxArea = function (heightArray) {
  let maxArea = 0,
    p1 = 0,
    p2 = heightArray.length - 1,
    currentArea = 0;
  let length = 0;
  let width = 0;

  if (heightArray.length <= 1) {
    return maxArea;
  }

  while (p1 <= p2) {
    width = p2 - p1;

    if (heightArray[p1] < heightArray[p2]) {
      length = heightArray[p1];
      currentArea = length * width;
      p1++;
    } else if (heightArray[p1] > heightArray[p2]) {
      length = heightArray[p2];
      currentArea = length * width;
      p2--;
    } else {
      length = heightArray[p1];
      currentArea = length * width;
      p1++;
      p2--;
    }

    if (currentArea > maxArea) {
      maxArea = currentArea;
    }
  }

  return maxArea;
};
