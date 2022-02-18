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

## Solution #2:

AlgoExpert: string = "AlgoExpert is the best!"

```js
function reverseWordsInString(string) {
  string = string.split(" ");
  for (let i = 0, j = string.length - 1; i < string.length / 2; i++, j--)
    [string[i], string[j]] = [string[j], string[i]];
  return string.join(" ");
}
```
