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

HackerRank:

```js

```
