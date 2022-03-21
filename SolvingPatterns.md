# Solving Problems

## **HOW TO IMPROVE?**

**1. DEVISE A PLAN FOR SOLVING PROBLEMS.** ✅

**2. MASTER COMMOM PROBLEMS SOLVING PATTERNS.**

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- **And Many More!**

# Frequency Counters

This pattern uses objects or sets to collect values/frequencies of values.
This can often avoid the need for nested loops or **O(N^2)** operations with arrays/ strings.

`Example: Write a function called **Same**, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frecuency of values must be the same.``

```js
Input: [1,2,3], [4,1,9];

Output: //true;

// Naive Solution
function same(arr, sqarray){
  // if they not the same length, return false.
  if(arr.length !-- sqarray.length) return false;

  for (let i =0; i < arr.length; i++) { // for loop

    let correctIndex = sqarray.indexOf(arr[i] ** 2); // indexOf, which is itself looping

    if(correctIndex === -1) return false;
    // remove it from 2nd array if the element is there (this might affect/mutate the information pass to us as parameter)
    sqarray.splice(correctIndex, 1);
  }

  return true;
}


// Time Complexity = N^2 (for loop + indexOf)
```

Now, to be able to refactor correctly, we can say that (2) separate for in loops is vastly better than (2) nested for loops.

## Refactored

```js
Input: [1,2,2, 3], [4,1, 4,9];

Output: //true;

// Naive Solution
function same(arr, sqarray){
  // if they not the same length, return false.
  if(arr.length !-- sqarray.length) return false;

  let frequencyCounter1 = {}, frequencyCounter2 = {}; // counting frequency of individual values in the arrays.

// This will be counting how many times the integer occurs in the array { 1: 1, 2: 2, 3: 1 }
  for (let val of arr) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of sqarray) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

// This will check if
  for (let key in frequencyCounter1) {
    // if this key squared in the second array?
    if(!(key ** 2 in frequencyCounter2)) return false;
// Do they correspond?
    if(frequencyCounter2[key **2] !== frequencyCounter1[key]) return false;
  }
  // else, return true.
  return true;
}


// Time Complexity = O(3n) where we have (3)for in loops => O(n)

```

The idea behind frequency countert is to use an object or array for quickly checks during for in loops and for comparisons.

Now let's use strings instead of arrays.
`Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.``

```js
function same(first, second) {
  // if they not the same length, return false.
  if (first.length !== second.length) return false;

  const lookUp = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if the letter exists, increment, otherwise set to 1
    lookUp[letter] ? (lookUp[letter] += 1) : (lookUp[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    // can't find letter or letter is zero then it's not an anagram
    if (!lookUp[letter]) return false;
    else lookUp[letter] -= 1;
  }
  return true;
}

// Time Complexity = O(n)
```

Everytime we have multiple pieces of data and we have to compare them, it's good to use frequencyCounter Patterns.

# Multiple Pointers

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.

Very efficient for solving problems with minimal space complexity as well.

`Example: Write a function called **sumZero** which accepts a sorted array of integers. The function should find the **first** **pair** where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.``

```js
Input: [-4, -3, -2, -1, 0, 1, 2, 5];

Output: [-2, 2];

//Naive Solution
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

//Time Complexity = O(N^2) | Space Complexity = O(1);
```

## Refactored

Starting this problem looking from both start and end:

```js
/*
(left)           (right)
[ 1,   2, 3, 4, 5,   6]
*/

function sumZero(arr) {
  // Start pointers beginning and end
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    //if the sum of both integers is Zero, return both integers
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      // move right pointer one to the left
      right--;
    } else {
      // move left pointer one to the right
      left++;
    }
  }
}

// Time Complexity = O(n) || Space Complexity = O(1)
```

Now, let's do it starting both pointers on the left side of the array:

`Example: Implement a function called **countUniqueValues**, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, buit it will always be sorted.``

```js
Input: [1, 1, 1, 1, 1, 2];

// 2

/*
(left)(right)
[  1,    1,    1,    1,    1,    2]
*/

// If we are allow to mutate the array, this can be a solution
// 2

Output: function countUniqueValues(arr) {
  let pointer1 = 0,
    pointer2 = 1;

  while (j !== arr.length) {
    let currentVal = arr[pointer1],
      nextVal = arr[pointer2];

    if (currentVal === nextVal) pointer2++;
    else {
      pointer1++;
      arr[pointer1] = arr[pointer2];
    }
  }
  return pointer1 + 1;
}
```
