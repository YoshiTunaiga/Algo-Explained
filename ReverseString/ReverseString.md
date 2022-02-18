# Reverse String

## Prompt

Write a function that reverses a string. The input string is given as an array of characters **s**.

You must do this by modifying the input array **in-place** with **O(1)** extra memory.

## Sample Input:

```js
str = ["h", "e", "l", "l", "o"];
```

## Sample Output:

```js
["o", "l", "l", "e", "h"];
```

## Solution #1

LeetCode:

```js
const reverseString = (str) => {
  // loop thru the array of strings from left to right and right to left
  for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
    // Swap in place using destructuring assignment;
    [str[i], str[j]] = [str[j], str[i]];
  }
};
```

Time Complexity O(n) | Space Complexity O(1);
