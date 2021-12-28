# First Non-Repeating Character

Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.

The first non-repeating character is the first character in a string that occurs only once.

If the input string doesn't have any non-repeating characters, the function should return -1;

# Sample Input

```js
string = "abcdcaf";
```

## Sample Output

```js
[2, 3, 5, 5, 6, 8, 9];
```

## Solution #1

```js
function firstNonRepeatingCharacter(string) {
  let memo = {}; // Start a memoization
  let index = 0;

  // Loop through the string to add to the memo
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    // If the character its already on the memo, add 1 to it..
    if (memo[char]) memo[char]++;
    else memo[char] = 1; // Else, add it for the first time.
  }

  // If the memo doesn't include any value of 1, return -1;
  if (!Object.values(memo).includes(1)) return -1;

  // Else, let's declare an array of the keys from the memo
  let array = Object.keys(memo);

  // As long as the array has a length;
  while (array.length) {
    let char = array.shift(); // Get the 1st character;

    // As soon as this character's value equals to 1;
    if (memo[char] === 1) {
      index = string.indexOf(char); // get the index of the character from the given string

      break; // then break;
    }
  }

  // return the index if its greater than 0 or return (0);
  return index ? index : 0;
}
```
