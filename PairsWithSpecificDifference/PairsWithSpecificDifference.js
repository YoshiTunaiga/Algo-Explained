let arr = [0, -1, -2, 2, 1],
  k = 1;

function findPairsWithGivenDifference(arr, k) {
  let pairsResult = [];
  let memo = {};

  for (let i = 0; i < arr.length; i++) memo[arr[i] - k] = arr[i];

  arr.forEach((num) => {
    if (memo[num] !== undefined) pairsResult.push([memo[num], num]);
  });

  return arr.length < 1 ? arr : pairsResult;
}

findPairsWithGivenDifference(arr, k);
