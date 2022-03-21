# Valid Anagram

## Prompt

Given two strings **s** and **t**, return _true_ if _t_ is an anagram of _s_, and _false_ otherwise.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Sample Input

```js
s = "anagram";
t = "nagaram";
```

## Sample OutPut

```js
true;
```

## Solution #1

LeetCode:

```js
const isAnagram = function (string, text) {
  let bool = true,
    memo = {};

  // Cover edge case where their length isn't equal;
  if (string.length !== text.length) return false;

  // convert in array
  string = string.split("");
  text = text.split("");

  // for each letter in string, let's add them to memo plus 1
  string.forEach((letter) =>
    memo[letter] ? memo[letter]++ : (memo[letter] = 1)
  );

  // for each letter in text, let's subtract them by 1 in memo;
  text.forEach((letter) => memo[letter]--);

  // if any value in memo does not equal 0 we should assume they not anagram;
  for (let key in memo) if (memo[key] !== 0) bool = false;

  // else return true;
  return bool;
};
```

## Solution #2

LeetCode:

```js
var isAnagram = function (str1, str2) {
  // is like looping to convert string to arrays (takes time)
  str1 = str1.split("");
  str2 = str2.split("");

  // Edge: check if the both same length
  if (str1.length !== str2.length) return false;

  // Loop through either or strings
  for (let i = 0; i < str1.length; i++) {
    // get the index of the first character
    let correctIndex = str2.indexOf(str1[i]);

    // if the char is not in the other array, return false;
    if (correctIndex === -1) return false;

    // else, remove from the otherArray while mutating the information passed
    str2.splice(correctIndex, 1);
  }
  // if everything was removed, return true;
  return true;
};
```

## Solution #3

LeetCode:

```js
var isAnagram = function (str1, str2) {
  // Edge: check if the both same length
  if (str1.length !== str2.length) return false;

  // Create empty counters for both strings
  let frequencyCounter1 = {},
    frequencyCounter2 = {};

  for (let val in str1)
    frequencyCounter1[str1[val]] = (frequencyCounter1[str1[val]] || 0) + 1;
  for (let val in str2)
    frequencyCounter2[str2[val]] = (frequencyCounter2[str2[val]] || 0) + 1;

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;

    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
  }
  return true;
};
```

## Solution #4

HackerRank:

```js

```
