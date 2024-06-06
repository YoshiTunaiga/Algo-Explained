## Merge Strings Alternately

You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return _the merged string_

## Sample Input

```js
const word1 = "abc",
  word2 = "pqr";
```

## Sample Output

```js
"apbqcr";
```

## Solution 1

```js
const mergeAlternately = (word1, word2) => {
  let mergedString = [];
  const word1Array = word1.split("");
  const word1Length = word1Array.length;
  const word2Array = word2.split("");
  const word2Length = word2Array.length;

  let index = 0;
  let jndex = 0;
  while (index < word1Length || jndex < word2Length) {
    if (index < word1Length) {
      mergedString.push(word1Array[index]);
      index++;
    }

    if (jndex < word2Length) {
      mergedString.push(word2Array[jndex]);
      jndex++;
    }
  }

  return mergedString.join("");
};
```

## Solution 2

```js
const mergeAlternately = (word1, word2) => {
  let result = "";

  // Store maximum length in a constant for efficiency during iterations
  const maxLength = Math.max(word1.length, word2.length);

  for (let idx = 0; idx < maxLength; idx++) {
    if (idx < word1.length) result += word1[idx];
    if (idx < word2.length) result += word2[idx];
  }

  return result;
};
```
