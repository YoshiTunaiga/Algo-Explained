# Sliding Window

The **sliding window** pattern is used to process **sequential data, arrays, and strings, for example, to efficiently solve subarray or substring problems.** It involves maintaining a dynamic window that slides through the array or string, adjusting its boundaries as needed to track relevant elements or characters. The window is used to slide over the data in chunks corresponding to the window size, and this can be set according to the problem’s requirements. It may be viewed as a variation of the two pointers pattern, with the pointers being used to set the window bounds.

- THE MOST OR THE LEAST
- There is always a k no matter if its given or not
- k could be constant or dinamic

## Sliding Samples

- **Maximum sum subarray of size K:** Given an array of integers and a positive integer k, find the maximum sum of any contiguous subarray of size k.
- **Longest substring without repeating characters:** Given a string, find the length of the longest substring without repeating characters.
- Given a string `S` and a string `T`, find the shortest substring in S that contains all the characters in `T`.
- Given an array of integers and a target sum, find the length of the smallest subarray whose sum is greater than or equal to the target sum.
- Given a string, `s`, that represents a DNA subsequence, and a number `𝑘`, return all the contiguous subsequences (substrings) of length `𝑘` that occur more than once in the string.

## Summary of Repeated DNA Sequences

Given a string, `s`, that represents a DNA subsequence, and a number `𝑘`, return all the contiguous subsequences (substrings) of length `𝑘` that occur more than once in the string.

### MY SOLUTION

```js
function findRepeatedSequences(s, k) {
  let memoSeq = {};

  for (let start = 0; start <= s.length - k; start++) {
    let end = start;
    let strSeq = "";
    let strCount = 0;

    while (strCount < k) {
      strSeq += s[end];
      end++;
      strCount++;
    }

    if (!memoSeq[strSeq]) {
      memoSeq[strSeq] = 1;
    } else {
      memoSeq[strSeq]++;
    }
    strSeq = "";
    strCount = 0;
  }

  return Object.keys(memoSeq).filter((dnaSeq) => memoSeq[dnaSeq] > 1);
}
```

### Grokking Solution

```js
function findRepeatedSequences(s, k) {
  const n = s.length;

  if (n < k) {
    return new Set();
  }

  const mapping = new Map([
    ["A", 1],
    ["C", 2],
    ["G", 3],
    ["T", 4],
  ]);

  const a = 4;

  const numbers = new Array(n);
  for (let i = 0; i < n; i++) {
    numbers[i] = mapping.get(s[i]);
  }

  let hashValue = 0;

  const hashSet = new Set();
  const output = new Set();

  for (let i = 0; i < n - k + 1; i++) {
    if (i === 0) {
      for (let j = 0; j < k; j++) {
        hashValue += numbers[j] * Math.pow(a, k - j - 1);
      }
    } else {
      const previousHashValue = hashValue;
      hashValue =
        (previousHashValue - numbers[i - 1] * Math.pow(a, k - 1)) * a +
        numbers[i + k - 1];
    }

    if (hashSet.has(hashValue)) {
      output.add(s.substring(i, i + k));
    }

    hashSet.add(hashValue);
  }
  return output;
}
```

To recap, the solution to this problem can be divided into the following six main parts:

1. Iterate over all 𝑘-length substrings.

2. Compute the hash value for the contents of the window.

3. Add this hash value to the set that keeps track of the hashes of all substrings of the given length.

4. Move the window one step forward and compute the hash of the new window using the rolling hash method.

5. If the hash value of a window has already been seen, the sequence in this window is repeated, so we add it to the output set.

6. Once all substrings have been evaluated, return the output set.

## Summary for Find Maximum in Sliding window

Given an integer array, nums, find the maximum values in all the contiguous subarrays (windows) of size w.

### MY SOLUTION

```js
function findMaxSlidingWindow(nums, w) {
  let maxValue = [];
  let tempMax = [];
  let start = 0;
  let array = nums.slice(start, w);
  tempMax = Math.max(...array);
  // console.log(array, "temp:", tempMax, start, w);
  maxValue.push(tempMax);

  for (let end = w - 1; end < nums.length; end++) {
    if (nums[end + 1] === undefined) {
      break;
    }
    array.shift();
    array.push(nums[end + 1]);

    tempMax = Math.max(...array);
    maxValue.push(tempMax);
  }

  return maxValue;
}
```

### Grokking Solution

1. First, we check if the input array contains only one element. If it does, we directly return the input array because there is only one maximum element.

2. Then, we process the first 𝑤 elements of the input array. We will use a deque to store the indexes of the candidate maximums of each window.

3. For each element, we perform the clean-up step, removing the indexes of the elements from the deque whose values are smaller than or equal to the value of the element we are about to add to the deque. Then, we append the index of the new element to the back of the deque.

4. After the first 𝑤 elements have been processed, we append the element whose index is present at the front of the deque to the output array, since it is the maximum in the first window.

5. After finding the maximum in the first window, we iterate over the remaining input array. For each element, we repeat Step 3 as we did for the first 𝑤 elements.

6. Additionally, in each iteration, before appending the index of the current element to the deque, we check if the first index in the deque has fallen out of the current window. If so, we remove it from the deque.

7. Finally, we return the output array containing the maximum elements of each window.

```js
function cleanUp(i, currentWindow, nums) {
  // remove all the indexes from currentWindow whose corresponding values are smaller than or equal to the current element
  while (
    currentWindow.length !== 0 &&
    nums[i] >= nums[currentWindow.peekBack()]
  ) {
    currentWindow.pop();
  }
}

function findMaxSlidingWindow(nums, w) {
  // if the length of input array is 1, return the input array
  if (nums.length === 1) {
    return nums;
  }

  // initializing variables
  const output = new Array(nums.length - w + 1);
  const currentWindow = new Deque();

  // iterate over the first w elements
  for (let i = 0; i < w; i++) {
    // for every element, remove the previous smaller elements from currentWindow
    cleanUp(i, currentWindow, nums);

    // append the index of the current element to currentWindow
    currentWindow.push(i);
  }

  // appending the maximum element of the current window to the output array
  output[0] = nums[currentWindow.peekFront()];

  // iterate over the remaining input array
  for (let i = w; i < nums.length; i++) {
    // for every element, remove the previous smaller elements from currentWindow
    cleanUp(i, currentWindow, nums);

    // remove first index from the currentWindow if it has fallen out of the current window
    if (currentWindow.length !== 0 && currentWindow.peekFront() <= i - w) {
      currentWindow.shift();
    }

    // append the index of the current element to currentWindow
    currentWindow.push(i);

    // adding the maximum element of the current window to the output array
    output[i - w + 1] = nums[currentWindow.peekFront()];
  }

  // return the array containing output
  return output;
}

// driver code
function main() {
  const windowSizes = [3, 3, 3, 3, 2, 4, 3, 2, 3, 6];
  const numLists = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [
      1, 5, 8, 10, 10, 10, 12, 14, 15, 19, 19, 19, 17, 14, 13, 12, 12, 12, 14,
      18, 22, 26, 26, 26, 28, 29, 30,
    ],
    [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67],
    [4, 5, 6, 1, 2, 3],
    [9, 5, 3, 1, 6, 3],
    [2, 4, 6, 8, 10, 12, 14, 16],
    [-1, -1, -2, -4, -6, -7],
    [4, 4, 4, 4, 4, 4],
  ];

  for (let i = 0; i < numLists.length; i++) {
    console.log(`${i + 1}.\tInput array:\t[${numLists[i]}]`);
    console.log(`\tWindow size:\t${windowSizes[i]}`);
    console.log(
      `\n\tMaximum in each sliding window:\t[${findMaxSlidingWindow(
        numLists[i],
        windowSizes[i]
      )}]`
    );
    Array(100)
      .fill("-")
      .forEach((char) => process.stdout.write(char));
    console.log();
  }
}
```

## Summary for Minimun Window Subsequence

Given two strings, str1 and str2, find the shortest substring in str1 such that str2 is a subsequence of that substring.

### MY SOLUTION & NOTES

```js
function minWindow(str1, str2) {
  // let foundStr = str1;
  // let currentStr = "";
  let start = 0;
  // let foundIdx = [];

  let foundStr = "";
  let minLen = Infinity;

  while (start < str1.length) {
    //Iterates through each character in str1 to find potential starting points that match the first character of str2.
    if (str1[start] === str2[0]) {
      let idx = start,
        jdx = 0;
      while (idx < str1.length && jdx < str2.length) {
        if (str1[idx] === str2[jdx]) {
          jdx++;
        }
        idx++;
      }
      if (jdx === str2.length) {
        let end = idx;
        let windowStr = str1.slice(start, end);
        if (windowStr.length < minLen) {
          // Keeps track of the smallest window found so far by comparing lengths.
          foundStr = windowStr;
          minLen = windowStr.length;
        }
      }
    }
    start++;
  }

  /*
  while(start < str1.length) {
      console.log(str1[start])
      console.log(foundIdx, start)
      if(str1[start] === str2[str2.length - 1]) {
          foundIdx.push(start);
          start++;
      } else {
          start++;
      }
  }

  while(foundIdx.length) {
      console.log(foundIdx, start)
      let end = foundIdx.shift();
      let startP = 0;
      while(startP < end) {
          if(str1[startP] === str2[0]) {
              console.log(str1.slice(startP, end + 1))
              currentStr = str1.slice(startP, end + 1)
              break;
          }
          startP++;
      }
      if(currentStr.length < foundStr.length) {
          foundStr = currentStr;
      }

      currentStr = "";
  }
  */

  // Returns the smallest window that contains str2 in order.
  return foundStr;
}
```

### GROKKING SOLUTION

```js
function minWindow(str1, str2) {
  let sizeStr1 = str1.length;
  let sizeStr2 = str2.length;
  let minSubLen = Infinity;
  let indexS1 = 0;
  let indexS2 = 0;
  let minSubsequence = "";

  while (indexS1 < sizeStr1) {
    if (str1[indexS1] === str2[indexS2]) {
      indexS2++;

      if (indexS2 === sizeStr2) {
        let start = indexS1;
        let end = indexS1;
        indexS2--;

        while (indexS2 >= 0) {
          if (str1[start] === str2[indexS2]) {
            indexS2--;
          }
          start--;
        }

        start++;

        if (end - start + 1 < minSubLen) {
          minSubLen = end - start + 1;
          minSubsequence = str1.slice(start, end + 1);
        }

        indexS1 = start;
        indexS2 = 0;
      }
    }
    indexS1++;
  }

  return minSubsequence;
}
```
