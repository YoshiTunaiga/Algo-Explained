# Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

## Samples

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Input: height = [1,1]
Output: 1
```

## Solution One

```js
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
```

## Solution Notes

```
const maxArea = function(heightArray) {
    /** FIX
        Input: Array
        Output: integer ()
        Variables:
            2 pointers (p1, p2)
            maxArea: 0
        Approach:
            * Edge Case: Check if the heightArray's length is equal to zero or one and return maxArea;

            Else:
            a. Set one pointer at the front and one at the end of the line
            b. Iterate through the array
                1. on each iteration, compare:
                    if they are both equal numbers or which is greater than the other
                    and set area to its multiple result
                2. For every iteration, check if the currentArea is heigher than maxArea
                    Movements: if p1 is less than p2 move inward, else move p2.
            c. Once iteration is complete, return maxArea
     */

     let maxArea = 0, p1 = 0, p2 = heightArray.length -1, currentArea = 0;
     let length = 0;
     let width = 0;

    if(heightArray.length <= 1) {
        return maxArea;
    }

    while (p1 <= p2) {
        width = p2 - p1;

        if(heightArray[p1] < heightArray[p2] ) {
             length = heightArray[p1];
             currentArea = length * width;
            p1++;
        } else if(heightArray[p1] > heightArray[p2]) {
            length = heightArray[p2];
            currentArea = length * width;
            p2--;
        } else {
            length = heightArray[p1];
            currentArea = length * width;
            p1++
            p2--;
        }

        if(currentArea > maxArea) {
            maxArea = currentArea;
        }
    }

    return maxArea;
};
```
