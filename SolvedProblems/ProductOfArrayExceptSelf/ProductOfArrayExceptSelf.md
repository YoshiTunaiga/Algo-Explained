# Product Of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

## Sample One:

```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

## Solution One:

```js
const productExceptSelf = (nums) => {
  let resultArray = [];
  let prodL = 1;
  let prodR = 1;

  for (let leftIdx = 0; leftIdx < nums.length; leftIdx++) {
    resultArray[leftIdx] = prodL;
    prodL *= nums[leftIdx];
  }

  for (let rightIdx = nums.length - 1; rightIdx >= 0; rightIdx--) {
    resultArray[rightIdx] *= prodR;
    prodR *= nums[rightIdx];
  }

  return resultArray;
};
```

## Solution Notes:

```
const productExceptSelf = (nums)  =>{
    /**
        Input: array of integers
        Output: array of integers

        Variables:
        - new array of producted integers
        - two pointers: right & left
        - productTotal

        Approach:
        - start a for loop for leftIdx
        - define:
            - a product total variable
            - a second point at the end of the nums array
        - while the rightIdx > leftIdx + 1 (except nums[i]);
        - move from right -> left towards nums[i]
        - multiply the integers to get the product
        - once rightIdx has reached the leftIdx + 1

        Edge Cases:
            - Duplicate integers within the resultArray?
     */

     let resultArray = [];
      let prod = 1;

    // Wrong Approach
    //  let window = nums.length/2;
    //  console.log("w => ", window)
    //  for(let leftIdx = 0; leftIdx < nums.length; leftIdx++) {
    //     let rightIdx = nums.length -1;
    //     let prod = 1;

    //     let filterArray = nums.filter((int, idx) => idx !== leftIdx)
    //     // console.log("r => ",nums[leftIdx] )
    //     filterArray.forEach((int) => prod *= int)
    //     // console.log("---> push ", prod)
    //     resultArray.push(prod);
    //  }

    //  for(let leftIdx = window; leftIdx <= window; leftIdx++) {
    //     let rightIdx = nums.length - 1;
    //     let prod = 1;

    //     while(rightIdx > leftIdx) {
    //         console.log("l => ",nums[rightIdx] )
    //         prod = prod*nums[rightIdx];
    //         rightIdx--;
    //     }
    //     console.log("---> push ", prod)
    //     otherArray.push(prod);
    //  }

    console.log(resultArray);
    // console.log(otherArray);
     return resultArray;
};
```
