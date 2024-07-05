# Palindrome Check

Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.
A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

## Sample Input

```javascript
string = "abcdcba";
```

## Sample Output

```javascript
true; // As long as its the same forward and backward
```

## Solution #1

```javascript
function isPalindrome(str) {
  // In case there's any capital letter, its best to check full lowercase or uppercase
  str = str.toLowerCase();

  //if str length=== 1 return true.
  if (str.length === 1) return true;
  if (str.length === 2) {
    //if str length === 2 check if they equal
    return str[0] === str[str.length - 1];
  }
  //else, check for each char, back vs front letter.
  let firstChar = str[0];
  let lastChar = str[str.length - 1];
  //If the first character it's not equal to the last character, return false.
  if (firstChar !== lastChar) return false;

  // Else, call the function back on the rest of the string;
  let otherLetters = isPalindrome(str.slice(1, -1));
  // return the result.
  return otherLetters;
}
```

## Solution #2

**Leetcode** => A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string _*s*_, return _*true*_ if it is a **_palindrome_**, or _*false*_ otherwise.

```js
const isPalindrome = function (str) {
  // remove all non-alphanumeric characters from the string
  const regex = /[^A-Za-z0-9]/g;
  str = str.replace(regex, "").toLowerCase();

  if (str.length <= 1) return true; // if string's length is less or equal to 1, return true;
  if (str.length === 2) return str[0] === str[str.length - 1]; // if string's length is equal to 2, return true if pair value is equal.

  // Get first and last character to compare from outside in;
  let firstChar = str[0];
  let lastChar = str[str.length - 1];

  // if first and last characters are not equal, return false;
  if (firstChar !== lastChar) return false;

  // call back the function sending string cut 1 index less from front and end.
  let otherLetters = isPalindrome(str.slice(1, -1));

  return otherLetters;
};
```
