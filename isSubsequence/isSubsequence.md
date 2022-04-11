# Is Subsequence

## Prompt

Write a function called **isSubsequence** which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, **without their order changing.**

## Sample Input

```js
(subStr = "hello"), (str = "hello world");

(subStr = "abc"), (str = "acb");
```

## Sample Output

```js
// true;

// false (order matters);
```

## Solution #1

MasterClass - Udemy

```js
function isSubsequence(subStr, str) {
  let firstIdx = 0,
    secondIdx = 0;

  while (firstIdx <= subStr.length && secondIdx <= str.length) {
    if (firstIdx === subStr.length) return true;
    else if (subStr[firstIdx] === str[secondIdx]) {
      firstIdx++;
      secondIdx++;
    } else if (subStr[firstIdx] !== str[secondIdx]) secondIdx++;
  }
  return false;
}
```

## Solution #2

MasterClass - Udemy

```js
function isSubsequence(subStr, str) {
  if (subStr.length === 0) return true;
  if (str.length === 0) return false;
  if (str[0] === str1[0]) return isSubsequence(subStr.slice(1), str.slice(1));
  return isSubsequence(subStr, str.slice(1));
}

RECURSIVE BUT NOT O(1) SPACE COMPLEXITY
```
