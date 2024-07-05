# Kids With the Greatest Number of Candies

There are `n` kids with `candies`. You are given an integer array candies, where each `candies[i]` represents the number of candies the `i-th` kid has, and an integer `extraCandies`, denoting the number of extra candies that you have.

Return _a boolean array result of length_ `n`, _where_ `result[i]` _is_ `true` _if, after giving the_ `i-th` _kid all the_ `extraCandies`, _they will have the greatest number of candies among all the kids, or_ `false` _otherwise._

Note that **multiple** kids can have the **greatest** number of candies.

# Sample One

```js
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true]
Explanation: If you give all extraCandies to:

/*
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
*/
```

# Solution One

```js
const kidsWithCandies = function (candies, extraCandies) {
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
```

# Solution Notes

```
Input: array, int
Output: an array of booleans which length is equal to the candies array

Variable: - GreatestNum = 0 - arrayResult = [];

Approach: - Sort the array of candies - For loop through the candies 1. For each candy, add extraCandies => sumOfCandies
a. If the sumOfCandies is greater than the last value of the sortedArray, then push true
```
