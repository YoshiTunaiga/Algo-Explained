const longestOnes = function (nums, k) {
  let startP = 0;
  let endP = 0;
  let zeroesCount = k;
  let windowSize = 0;

  while (endP < nums.length) {
    if (!nums[endP]) {
      zeroesCount--; // decrement zeroes count
    }

    if (zeroesCount < 0) {
      if (!nums[startP]) {
        // if startPoint equals 0
        zeroesCount++; // increment zeroes count
      }
      startP++; // move start Point to the next position
      windowSize--; // increment window size
    }

    endP++; // move end Point to the next position
    windowSize++; // incremement the window size
  }

  return windowSize;
};

longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3);
