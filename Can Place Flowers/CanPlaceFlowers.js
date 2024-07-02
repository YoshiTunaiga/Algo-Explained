const canPlaceFlowers = function (flowerbed, newFlowersCount) {
  for (let idx = 0; idx < flowerbed.length; idx++) {
    if (
      !flowerbed[idx - 1] &&
      !flowerbed[idx + 1] &&
      !flowerbed[idx] &&
      newFlowersCount
    ) {
      flowerbed[idx] = 1;
      newFlowersCount--;
    }
  }

  return !n;
};
