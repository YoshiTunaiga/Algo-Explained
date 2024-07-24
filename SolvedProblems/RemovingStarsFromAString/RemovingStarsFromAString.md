# Removing Stars From A String

You are given a string s, which contains stars \*.

In one operation, you can:

Choose a star in s.
Remove the closest non-star character to its left, as well as remove the star itself.
Return the string after all stars have been removed.

Note:

The input will be generated such that the operation is always possible.
It can be shown that the resulting string will always be unique.

## Sample Output

```
Example 1:

Input: s = "leet**cod*e"
Output: "lecoe"
Explanation: Performing the removals from left to right:
- The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
- The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".

Example 2:

Input: s = "erase*****"
Output: ""
Explanation: The entire string is removed, so we return an empty string.
```

## Solution 1

```js
const removeStars = (str) => {
  const stackOfChar = [];

  for (let idx = 0; idx < str.length; idx++) {
    let currentChar = str[idx];

    if (currentChar === "*") {
      stackOfChar.pop();
    } else {
      stackOfChar.push(currentChar);
    }
  }

  return stackOfChar.join("");
};
```

### Solution Notes:

```js
const removeStars = (str) => {
  /**
    RemovingStarsFromAString
    Input: 
            - String
    Output:
            - String
    Variables:
            - queue
            - stack
    Approach:
            - loop thru the string
            - if the currentChar is a star, pop of the stack
            - else push
            - push to the stack
     */

  const stackOfChar = [];

  for (let idx = 0; idx < str.length; idx++) {
    let currentChar = str[idx];

    if (currentChar === "*") {
      stackOfChar.pop();
    } else {
      stackOfChar.push(currentChar);
    }
  }

  return stackOfChar.join("");
};
```
