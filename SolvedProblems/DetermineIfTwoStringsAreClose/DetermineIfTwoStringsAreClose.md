# Determine if Two Strings are close

Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

## Samples

```
Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
```

## Solution #1

```js
const closeStrings = (word1, word2) => {
  if (word1.length !== word2.length) return false;

  let word1Array = word1.split("");
  let word2Array = word2.split("");
  const setWord1 = new Set(word1Array);
  const setWord2 = new Set(word2Array);

  let isDifferent = false;
  setWord1.forEach((val, char) => {
    if (!setWord2.has(char)) isDifferent = true;
  });

  if (isDifferent) return false;

  const memoCount1 = {};
  const memoCount2 = {};

  word1Array.forEach((char) => {
    if (!memoCount1[char]) {
      memoCount1[char] = 1;
    } else {
      memoCount1[char]++;
    }
  });

  word2Array.forEach((char) => {
    if (!memoCount2[char]) {
      memoCount2[char] = 1;
    } else {
      memoCount2[char]++;
    }
  });

  let list1 = Object.values(memoCount1);
  list1.sort((a, b) => a - b);
  let list2 = Object.values(memoCount2);
  list2.sort((a, b) => a - b);

  for (let idx = 0; idx < list1.length; idx++) {
    if (list1[idx] !== list2[idx]) return false;
  }

  return true;
};
```

Notes

```js
const closeStrings = (word1, word2) => {
  /**
        Input: two strings lowercase
        Output: boolean
        Variable: 
            - setWord1
            - setWord2
        Approach:
            - use set for both strings
            - compare if there are any new chars between sets
            - return false if new chars as difference appear
            - compare the count of all char in each set
            - sort both lists
            - if the count of each char is equal to the other, return true
            - else return false
        Edge Case:
            - If both words are not of same length, return false
     */

  if (word1.length !== word2.length) return false;

  let word1Array = word1.split("");
  let word2Array = word2.split("");
  const setWord1 = new Set(word1Array);
  const setWord2 = new Set(word2Array);

  let isDifferent = false;
  setWord1.forEach((val, char) => {
    if (!setWord2.has(char)) isDifferent = true;
  });
  // const different = setWord1.difference(setWord2) new set()

  if (isDifferent) return false;

  const memoCount1 = {};
  const memoCount2 = {};

  word1Array.forEach((char) => {
    if (!memoCount1[char]) {
      memoCount1[char] = 1;
    } else {
      memoCount1[char]++;
    }
  });

  word2Array.forEach((char) => {
    if (!memoCount2[char]) {
      memoCount2[char] = 1;
    } else {
      memoCount2[char]++;
    }
  });

  let list1 = Object.values(memoCount1);
  list1.sort((a, b) => a - b);
  let list2 = Object.values(memoCount2);
  list2.sort((a, b) => a - b);

  for (let idx = 0; idx < list1.length; idx++) {
    if (list1[idx] !== list2[idx]) return false;
  }

  return true;
};
```
