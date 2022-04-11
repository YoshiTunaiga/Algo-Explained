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
