const kidsWithCandies = function (candies, extraCandies) {
  /**
      Input: array, int
      Output: an array of booleans which length is equal to the candies array

      Variable: 
          - GreatestNum = 0
          - arrayResult = [];

      Approach:
          - Sort the array of candies
          - For loop through the candies
              1. For each candy, add extraCandies => sumOfCandies
                  a. If the sumOfCandies is greater than the last value of the sortedArray, then push true
   */

  let greatestNum = 0,
    arrayResult = [],
    p1 = 0;

  while (p1 < candies.length) {
    if (candies[p1] > greatestNum) greatestNum = candies[p1];
    p1++;
  }

  for (let idx = 0; idx < candies.length; idx++) {
    let sumOfCandies = candies[idx] + extraCandies;
    if (sumOfCandies >= greatestNum) {
      arrayResult.push(true);
    } else {
      arrayResult.push(false);
    }
  }

  return arrayResult;
};
