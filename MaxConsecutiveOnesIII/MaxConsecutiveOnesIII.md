# Max Consecutive Ones III

Given a binary array `nums` and an integer `k`, return the _maximum number of consecutive_ `1`'s in the array if you can flip at most `k` `0`'s.

## Sample Solutions

```
Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
```

## Solution One

```js
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
```

## Solution One Notes

```
const longestOnes = function(nums, k) {
    /*
    Input:
        - Array of integers 1s & 0s
        - single integer representing the amount of zeroes I need to flip
    Output:
        - Maximum count of consecutive 1s after k amount of 0s have been flipped
    Variables:
        - Counter of max
        -
    Approach:
        - For loop with pointer at the end
            - helper function that checks sections of the original array to change any zero and count max
        - For loop with start and end

    Edge Cases:
        - nums.length one
        -
     */

    let startP = 0;
    let endP = 0;
    let zeroesCount = k;
    // let lengthOfOnes = 0;
    let windowSize = 0

    while(endP < nums.length) {

        // console.log(nums.slice(startP, endP), startP, endP, maxCount)

        // if(nums[endP]) {
        //     endP++; // move the end Point to the next
        // }

        if(!nums[endP]){
            zeroesCount--; // decrement zeroes count
        }

        if(zeroesCount < 0) {
            if(!nums[startP]){ // if startPoint equals 0
                zeroesCount++; // increment zeroes count
            }
            startP++; // move start Point to the next position
            windowSize--;
        }

        // lengthOfOnes = endP - startP + 1
        // if(lengthOfOnes > maxCount) {
        //     maxCount = lengthOfOnes;
        // }
        endP++;
        windowSize++;
        console.log(windowSize)
    }


    // for (let start = 0; start < nums.length - 1; start++) {
    //     let end = start;
    //     let zeroesCount = k;
    //     let sampleCount = 0;
    //     // let sampleArray = []

    //     while(zeroesCount > 0 && end < nums.length) {
    //         if(!nums[end]) {
    //             zeroesCount--;
    //         }
    //         sampleCount++;
    //         end++;
    //     }

    //     // let totalCount = sampleArray.reduce((accm, curr) => accm + curr, 0);

    //     if(sampleCount > maxCount) {
    //         maxCount = sampleCount;
    //     }
    // }

    return windowSize;
};
```
